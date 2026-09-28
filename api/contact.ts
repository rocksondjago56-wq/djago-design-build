interface VercelRequest {
  method?: string;
  body: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(data: unknown): VercelResponse;
  setHeader(name: string, value: string): VercelResponse;
  end(): VercelResponse;
}

interface ContactRequestBody {
  fullName?: string;
  email?: string;
  phone?: string;
  servicePillar?: string;
  projectLocation?: string;
  budgetRange?: string;
  message?: string;
  botField?: string;
}

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method not allowed.' });

  try {
    const body = (req.body || {}) as ContactRequestBody;
    if (body.botField) return res.status(200).json({ success: true, message: 'Inquiry received.' });

    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.fullName || body.fullName.trim().length < 2) errors.fullName = 'Please provide your full name.';
    if (!body.email || !emailRegex.test(body.email.trim())) errors.email = 'Please provide a valid email address.';
    if (!body.phone || body.phone.trim().length < 7) errors.phone = 'Please provide a valid telephone number.';
    if (!body.message || body.message.trim().length < 10) errors.message = 'Please describe your project requirements (minimum 10 characters).';
    if (Object.keys(errors).length) return res.status(400).json({ success: false, error: 'Please correct the highlighted fields.', details: errors });

    const inquiryId = `DJG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
    const inquiry = {
      fullName: body.fullName!.trim(), email: body.email!.trim().toLowerCase(), phone: body.phone!.trim(),
      servicePillar: body.servicePillar?.trim() || 'General Inquiry',
      projectLocation: body.projectLocation?.trim() || 'Not specified',
      budgetRange: body.budgetRange?.trim() || 'Not specified', message: body.message!.trim(),
    };
    const resendApiKey = process.env.RESEND_API_KEY;
    const sender = process.env.RESEND_FROM_EMAIL;
    const recipients = process.env.RESEND_TO_EMAIL || 'Djagodesignbuild@gmail.com';
    if (!resendApiKey || !sender) {
      console.error('[DJAGO API] Missing Resend configuration.');
      return res.status(503).json({ success: false, error: 'Online submissions are temporarily unavailable. Please contact DJAGO directly by email or WhatsApp.' });
    }

    const safe = Object.fromEntries(Object.entries(inquiry).map(([key, value]) => [key, escapeHtml(value)])) as typeof inquiry;
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendApiKey}` },
      body: JSON.stringify({
        from: sender,
        to: recipients.split(',').map((email) => email.trim()).filter(Boolean),
        reply_to: inquiry.email,
        subject: `[${inquiryId}] New consultation: ${inquiry.servicePillar} — ${inquiry.fullName}`,
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;padding:24px;color:#1f2937"><h2 style="color:#b45309">New DJAGO consultation inquiry</h2><p><strong>Reference:</strong> ${inquiryId}</p><hr/><p><strong>Client:</strong> ${safe.fullName}</p><p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Service:</strong> ${safe.servicePillar}</p><p><strong>Location:</strong> ${safe.projectLocation}</p><p><strong>Budget:</strong> ${safe.budgetRange}</p><h3>Project requirements</h3><p style="white-space:pre-wrap">${safe.message}</p></div>`,
      }),
    });
    if (!emailResponse.ok) {
      console.error('[DJAGO API] Resend delivery failed:', await emailResponse.text());
      return res.status(502).json({ success: false, error: 'We could not deliver your inquiry. Please contact DJAGO directly by email or WhatsApp.' });
    }

    const whatsappText = encodeURIComponent(`Hello DJAGO Team, I just submitted an inquiry.\n\n*Reference:* ${inquiryId}\n*Name:* ${inquiry.fullName}\n*Service:* ${inquiry.servicePillar}\n*Overview:* ${inquiry.message}`);
    return res.status(200).json({
      success: true, inquiryId, whatsappUrl: `https://wa.me/233596064344?text=${whatsappText}`,
      message: 'Your consultation inquiry has been received.'
    });
  } catch (error) {
    console.error('[DJAGO API] Contact handler error:', error);
    return res.status(500).json({ success: false, error: 'An internal error occurred. Please contact DJAGO directly by email or WhatsApp.' });
  }
}
