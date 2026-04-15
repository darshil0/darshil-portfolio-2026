import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, AlertCircle } from 'lucide-react';
import { contactEmail, formId } from '../../constants/data.js';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const isFormSetupRequired = formId === 'YOUR_FORM_ID';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setFormStatus('sending');

    if (isFormSetupRequired) {
      // Simulation fallback
      setTimeout(() => {
        setFormStatus('success');
        form.reset();
      }, 1000);
      return;
    }

    try {
      const formData = new FormData(form);
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          console.error(data['errors'].map(error => error['message']).join(', '));
        }
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-[#f8f9ff] dark:bg-slate-900 min-h-[600px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00685f]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Let's Connect</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 text-lg font-medium opacity-80">Looking to elevate your QA strategy or build world-class testing teams?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="bg-white dark:bg-slate-800/50 rounded-[2rem] p-10 border border-slate-100 dark:border-slate-800 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 tracking-tight">Direct Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-[#00685f]/20 transition-all group">
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-5 text-slate-700 dark:text-slate-200">
                    <div className="w-12 h-12 rounded-2xl bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center group-hover:bg-[#00685f] group-hover:text-white transition-all shadow-sm">
                      <Mail size={22} />
                    </div>
                    <span className="font-bold text-sm tracking-wide">{contactEmail}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-3 text-slate-400 hover:text-[#00685f] hover:bg-[#00685f]/5 rounded-xl transition-all"
                    title="Copy email address"
                  >
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>

                <a href="https://www.linkedin.com/in/darshil-qa-lead/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-[#00685f]/20 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center group-hover:bg-[#00685f] group-hover:text-white transition-all shadow-sm">
                    <Linkedin size={22} />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-slate-700 dark:text-slate-200">LinkedIn Profile</span>
                </a>

                <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-transparent hover:border-[#00685f]/20 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center group-hover:bg-[#00685f] group-hover:text-white transition-all shadow-sm">
                    <Github size={22} />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-slate-700 dark:text-slate-200">GitHub Open Source</span>
                </a>
              </div>
            </div>

            <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="group relative block w-full bg-[#121c28] dark:bg-white text-white dark:text-[#121c28] p-6 rounded-[2rem] font-black text-lg text-center shadow-2xl hover:bg-[#00685f] dark:hover:bg-[#6bd8cb] transition-all overflow-hidden duration-500">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Download PDF Resume <Check size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800/80 backdrop-blur-xl p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-[#00685f]/5">
            <h3 className="text-2xl font-black mb-8 tracking-tight">Send a Message</h3>

            {isFormSetupRequired && (
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <AlertCircle className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-amber-900 dark:text-amber-100">Setup Required</h4>
                  <p className="text-xs text-amber-700 dark:text-amber-300 mt-1 leading-relaxed">
                    Form submission is currently in simulation mode. Replace <code>YOUR_FORM_ID</code> in <code>src/constants/data.js</code> with a valid Formspree ID to enable live delivery.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="block text-[10px] font-black text-[#00685f] dark:text-[#6bd8cb] uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input type="text" id="contact-name" name="name" required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none text-sm font-medium transition-all" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-email" className="block text-[10px] font-black text-[#00685f] dark:text-[#6bd8cb] uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input type="email" id="contact-email" name="email" required className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none text-sm font-medium transition-all" placeholder="name@company.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="block text-[10px] font-black text-[#00685f] dark:text-[#6bd8cb] uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea id="contact-message" name="message" required rows="4" className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none text-sm font-medium resize-none transition-all" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-[#00685f] text-white py-5 rounded-2xl font-black text-base shadow-xl shadow-[#00685f]/20 hover:bg-[#00514a] hover:-translate-y-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                {formStatus === 'sending' ? 'Initiating...' : 'Secure Submit'}
              </button>

              {formStatus === 'success' && (
                <div className="p-5 bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 rounded-2xl text-center text-sm font-black animate-in fade-in zoom-in-95">
                  ✓ Message sent! I'll be in touch soon.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-5 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-2xl text-center text-sm font-black animate-in fade-in zoom-in-95">
                  ✕ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
