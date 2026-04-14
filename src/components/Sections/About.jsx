import React from 'react';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="py-24 bg-[#eef4ff] dark:bg-slate-900/50 min-h-[600px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00685f]/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">About My Mission</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-cyan-900/5">
              <p className="text-2xl leading-relaxed mb-10 italic text-[#00685f] dark:text-[#6bd8cb] font-bold tracking-tight">
                "In healthcare, there is a real patient behind every release."
              </p>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                <p>
                  I lead QA teams that do far more than find bugs — we prevent patient safety risks, drive measurable business impact, and enable safer, smarter healthcare innovation.
                </p>
                <p>
                  At Accenture, I transformed QA delivery for Fortune 500 healthcare clients, earning awards for leadership and technical excellence. My approach: empathy, integrity, and transparent communication.
                </p>
              </div>
              
              <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#00685f]/60 dark:text-[#6bd8cb]/60 mb-8">Core Strategic Pillars</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Strategic QA leadership & team management',
                    'HIPAA, FDA & ISO compliance expertise',
                    'AI-driven automation with LLMs & ChatGPT',
                    'EHR/EMR, telehealth & ADA compliance',
                    'End-to-end patient safety focused QA',
                    'Agentic AI Development & Agent Testing',
                  ].map(s => (
                    <div key={s} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-transparent hover:border-[#00685f]/20 transition-all">
                      <div className="w-6 h-6 rounded-full bg-[#00685f]/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#00685f] dark:text-[#6bd8cb]" />
                      </div>
                      <span className="font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#00685f]/60 dark:text-[#6bd8cb]/60 mb-6">Linguistic Proficiency</h4>
              <div className="flex flex-wrap gap-4">
                {['English — Native/Bilingual', 'Hindi — Full Professional', 'Gujarati — Native'].map(lang => (
                  <div key={lang} className="px-5 py-3 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] rounded-2xl text-xs font-bold border border-[#00685f]/5 shadow-sm">
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gradient-to-br from-[#121c28] to-[#00201d] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00685f]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-3xl font-black mb-2 tracking-tight">Darshil Shah</h3>
              <p className="text-sm text-[#89f5e7] font-bold uppercase tracking-widest mb-10 opacity-80">Global QA Leader</p>
              <ul className="space-y-6">
                {['US Citizen', '14+ Years Leading QA', 'AWS Certified Architect', 'Dallas-Fort Worth, TX'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-sm font-medium">
                    <div className="w-6 h-6 rounded-lg bg-[#89f5e7]/10 flex items-center justify-center">
                      <Check size={14} className="text-[#89f5e7]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-xl border border-slate-100 dark:border-slate-800">
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#00685f]/60 dark:text-[#6bd8cb]/60 mb-8">Specialized Tooling</h4>
              <div className="flex flex-col gap-3">
                {['Agentic AI Development', 'ADA Section 508 Testing', 'Digital Health Compliance', 'Generative AI Test Automation', 'FDA Software Validation'].map(skill => (
                  <div key={skill} className="group flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-[#00685f] dark:hover:bg-[#00685f] transition-all duration-300">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors">{skill}</span>
                    <div className="w-2 h-2 rounded-full bg-[#00685f] group-hover:bg-white transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
