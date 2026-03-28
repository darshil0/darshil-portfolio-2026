import React from 'react';
import { Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about-section" className="py-20 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">About My Mission</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm">
              <p className="text-lg leading-relaxed mb-6 italic text-[#00685f] dark:text-[#6bd8cb] font-medium">
                "Quality is not just a process in healthcare—it is a commitment to patient safety."
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                My goal is to transition Quality Assurance from a procedural step into a strategic asset. I specialize in AI-Augmented QA, using Agentic AI to identify risks before they reach clinical settings.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                I have managed global testing operations at Accenture and developed high-precision automation at Prime Therapeutics, working closely with clinicians, data scientists, and engineering teams.
              </p>
            </div>
          </div>
          <div className="bg-[#00685f] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4">Darshil Shah</h3>
            <p className="text-sm opacity-80 mb-6">Global Healthcare QA Leader</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> US Citizen</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> 14+ Years Experience</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> AWS Certified</li>
              <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> Dallas-Fort Worth, TX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
