interface VercelRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body: any;
  query?: Record<string, string | string[]>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(data: any): VercelResponse;
  setHeader(name: string, value: string): VercelResponse;
  end(): VercelResponse;
}

interface ContactRequestBody {
  fullName: string;
  email: string;
  phone: string;
  servicePillar?: string;
  projectLocation?: string;
  budgetRange?: string;
  message: string;
  botField?: string; // Honeypot field
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please use POST.'
    });
  }

  try {
    const body: ContactRequestBody = req.body || {};

    // 1. Honeypot check for spam bots
    if (body.botField) {
      console.warn('[DJAGO API] Spam bot trapped via honeypot field');
      return res.status(200).json({
        success: true,
        message: 'Inquiry received.'
      });
    }

    const {
      fullName,
      email,
      phone,
      servicePillar = 'General Inquiry',
      projectLocation = 'Accra, Ghana',
      budgetRange = 'Not specified',
      message
    } = body;

    // 2. Validate required inputs
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please provide your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      errors.phone = 'Please provide a valid contact telephone number.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Please describe your project requirements (minimum 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed. Please correct the highlighted fields.',
        details: errors
      });
    }

    // 3. Generate reference ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const inquiryId = `DJG-${timestamp}-${randomHex}`;

    // Clean data payload
    const sanitizedData = {
      inquiryId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      servicePillar: servicePillar.trim(),
      projectLocation: projectLocation.trim(),
      budgetRange: budgetRange.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString()
    };

    console.log('[DJAGO API] New Consultation Inquiry Received:', sanitizedData);

    // 4. Optional: Dispatch Email via Resend if RESEND_API_KEY is configured in Vercel
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: 'DJAGO Inquiries <onboarding@resend.dev>',
            to: ['info@djagodesignbuild.com', 'rocksondjago56@gmail.com'],
            subject: `[${inquiryId}] New Consultation Request: ${sanitizedData.servicePillar} - ${sanitizedData.fullName}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0f12; color: #f1f5f9; padding: 24px; border-radius: 12px; border: 1px solid #d97706;">
                <h2 style="color: #f59e0b; margin-top: 0;">DJAGO Design & Build — New Client Inquiry</h2>
                <p style="color: #94a3b8; font-size: 13px;">Inquiry Reference: <strong>${inquiryId}</strong> | ${new Date().toLocaleString()}</p>
                <hr style="border: 0; border-top: 1px solid #262b33; margin: 16px 0;" />
                
                <p><strong>Client Name:</strong> ${sanitizedData.fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}" style="color: #f59e0b;">${sanitizedData.email}</a></p>
                <p><strong>Phone:</strong> <a href="tel:${sanitizedData.phone}" style="color: #f59e0b;">${sanitizedData.phone}</a></p>
                <p><strong>Primary Discipline:</strong> ${sanitizedData.servicePillar}</p>
                <p><strong>Project Location:</strong> ${sanitizedData.projectLocation}</p>
                <p><strong>Budget Bracket:</strong> ${sanitizedData.budgetRange}</p>
                
                <div style="background: #161a22; padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #f59e0b;">
                  <strong style="color: #f59e0b; display: block; margin-bottom: 8px;">Project Scope / Requirements:</strong>
                  <p style="white-space: pre-wrap; margin: 0; color: #e2e8f0; font-size: 14px;">${sanitizedData.message}</p>
                </div>
              </div>
            `
          })
        });

        if (!emailResponse.ok) {
          console.warn('[DJAGO API] Resend email delivery failed:', await emailResponse.text());
        } else {
          console.log('[DJAGO API] Notification email dispatched successfully via Resend');
        }
      } catch (emailErr) {
        console.warn('[DJAGO API] Error sending email via Resend:', emailErr);
      }
    }

    // 5. Build pre-formatted direct WhatsApp URL for rapid follow-up
    const whatsappText = encodeURIComponent(
      `Hello DJAGO Executive Team, I just submitted an inquiry on your website!\n\n` +
      `*Reference:* ${inquiryId}\n` +
      `*Name:* ${sanitizedData.fullName}\n` +
      `*Discipline:* ${sanitizedData.servicePillar}\n` +
      `*Budget:* ${sanitizedData.budgetRange}\n` +
      `*Location:* ${sanitizedData.projectLocation}\n\n` +
      `*Overview:*\n${sanitizedData.message}`
    );
    const whatsappUrl = `https://wa.me/233596064344?text=${whatsappText}`;

    return res.status(200).json({
      success: true,
      message: 'Your consultation inquiry has been successfully received by the DJAGO executive engineering & design team.',
      inquiryId,
      data: {
        fullName: sanitizedData.fullName,
        servicePillar: sanitizedData.servicePillar,
        submittedAt: sanitizedData.submittedAt
      },
      whatsappUrl
    });

  } catch (error) {
    console.error('[DJAGO API] Internal server error handling contact request:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again or reach out directly via WhatsApp.'
    });
  }
}
