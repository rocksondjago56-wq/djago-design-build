const fs = require('fs');
const path = 'src/components/Contact.tsx';
let content = fs.readFileSync(path, 'utf8');

// Check current lines 172-190 to find exact content
const lines = content.split('\n');
const startLine = 171;
const endLine = 190;
console.log('=== CURRENT LINES 172-190 ===');
for (let i = startLine; i <= endLine; i++) {
  if (lines[i] !== undefined) {
    console.log((i + 1) + ': ' + lines[i]);
  }
}

// Attempt simple string replacement using marker strings
const marker1 = '{submitted ? (';
const marker2 = 'Submit Another Inquiry\n                    </button>\n                  </div>';

const idx1 = content.indexOf(marker1);
const idx2 = content.indexOf(marker2);

console.log('\\nmarker1 index:', idx1);
console.log('marker2 index:', idx2);

if (idx1 !== -1 && idx2 !== -1) {
  const endIdx = idx2 + marker2.length;
  const before = content.slice(0, idx1);
  const after = content.slice(endIdx);

  const newSuccessBlock = `{submitted && successData ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 text-amber-400 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-['Syne']">
                      Consultation Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out to <strong>DJAGO Design &amp; Build</strong>. One of our lead project engineers or brand directors will contact you within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-['Space_Grotesk'] text-xs font-bold tracking-widest mx-auto">
                      <span>Reference:</span>
                      <span className="text-white">{successData.inquiryId}</span>
                    </div>
                    {successData.whatsappUrl && (
                      <a
                        href={successData.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-bold font-['Space_Grotesk'] text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Follow Up on WhatsApp
                      </a>
                    )}
                    <button
                      onClick={() => { setSubmitted(false); setSuccessData(null); }}
                      className="block mx-auto mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold font-['Space_Grotesk'] text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>`;

  const newContent = before + newSuccessBlock + after;
  fs.writeFileSync(path, newContent, 'utf8');
  console.log('\nSUCCESS: Success block replaced with inquiry ID and WhatsApp!');
} else {
  console.log('\nFailed to find markers in file');
}
