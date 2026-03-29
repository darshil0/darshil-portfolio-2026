import React from 'react';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="py-20 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">About My Mission</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed mb-6 italic text-[#00685f] dark:text-[#6bd8cb] font-medium">
                "In healthcare, there is a real patient behind every release."
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I lead QA teams that do far more than find bugs — we prevent patient safety risks, drive measurable business impact, and enable safer, smarter healthcare innovation. Passionate about advancing healthcare technology that improves outcomes while ensuring compliance, quality, and trust.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                At Accenture, I transformed QA delivery for Fortune 500 healthcare clients, earning awards for leadership and technical excellence. My approach: empathy, integrity, and transparent communication at every level.
              </p>
              <div className="border-t border-slate-100 dark:border-slate-700 pt-6">
                <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Core Strengths</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Strategic QA leadership & team management',
                    'HIPAA, FDA & ISO compliance expertise',
                    'AI-driven automation with LLMs & ChatGPT',
                    'EHR/EMR, telehealth & ADA compliance',
                    'End-to-end patient safety focused QA',
                    'Agentic AI Development & Agent Testing',
                  ].map(s => (
                    <div key={s} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Check size={14} className="text-[#00685f] mt-0.5 shrink-0" />{s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm">
              <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {['English — Full Professional', 'Hindi — Full Professional', 'Gujarati — Full Professional'].map(lang => (
                  <span key={lang} className="px-3 py-1.5 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] rounded-lg text-xs font-semibold">{lang}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-[#00685f] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Darshil Shah</h3>
              <p className="text-sm opacity-80 mb-6">Global Healthcare QA Leader</p>
              <ul className="space-y-4 text-sm">
                {['US Citizen', '14+ Years Experience', 'AWS Certified', 'Dallas-Fort Worth, TX'].map(item => (
                  <li key={item} className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm">
              <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Top Skills</h4>
              <div className="flex flex-col gap-2">
                {['Agentic AI Development', 'ADA Testing', 'Digital Healthcare Solutions', 'AI-Powered Test Automation', 'HIPAA / FDA Compliance'].map(skill => (
                  <span key={skill} className="px-3 py-2 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] rounded-lg text-xs font-semibold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
