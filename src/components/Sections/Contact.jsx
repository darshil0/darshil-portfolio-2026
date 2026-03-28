import React, { useState } from 'react';
import { Mail, Github, Linkedin, AlertCircle } from 'lucide-react';
import { contactEmail } from '../../constants/data.js';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const isFormSetupRequired = true; // For demonstration purposes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
    }, 1000);
  };

  return (
    <section id="contact-section" className="py-20 bg-[#f8f9ff] dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-4">Let's Connect</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-12">Looking to elevate your QA strategy or build world-class testing teams?</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb] p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center"><Mail size={20} /></div>
                  <span className="font-medium text-sm">{contactEmail}</span>
                </a>
                <a href="https://linkedin.com/in/darshils" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb] p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center"><Linkedin size={20} /></div>
                  <span className="font-medium text-sm">linkedin.com/in/darshils</span>
                </a>
                <a href="https://github.com/darshilshah" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb] p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] flex items-center justify-center"><Github size={20} /></div>
                  <span className="font-medium text-sm">github.com/darshilshah</span>
                </a>
              </div>
            </div>
            
            <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="block w-full text-center bg-[#121c28] dark:bg-white text-white dark:text-[#121c28] py-4 rounded-2xl font-bold hover:bg-[#00685f] transition-colors shadow-xl">
              Download Full PDF Resume
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            
            {isFormSetupRequired && (
              <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl flex gap-3 text-amber-800 dark:text-amber-300">
                <AlertCircle className="shrink-0 mt-0.5" size={18} />
                <div className="text-sm">
                  <strong>Form setup required.</strong><br/>
                  Replace the default action endpoint or usemailto.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Name</label>
                <input type="text" id="contact-name" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none transition-all text-sm" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Email</label>
                <input type="email" id="contact-email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none transition-all text-sm" placeholder="name@company.com" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Message</label>
                <textarea id="contact-message" required rows="4" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-[#00685f] focus:border-transparent outline-none transition-all text-sm resize-none" placeholder="How can I help you?"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isFormSetupRequired}
                className="w-full bg-[#00685f] text-white py-4 rounded-xl font-bold hover:bg-[#00514a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <div className="p-4 bg-[#82f5c1]/20 border border-[#006c4a]/20 text-[#006c4a] dark:text-[#82f5c1] rounded-xl text-center text-sm font-bold animate-in fade-in">
                  ✓ Message sent successfully! I'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
