import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications-section" className="py-20 bg-[#f8f9ff] dark:bg-slate-800 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12 flex items-center gap-3">
          <ShieldCheck size={36} className="text-[#00685f] dark:text-[#6bd8cb]" />
          Licenses & Certifications
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            { tag: 'AI/ML', issue: 'IBM', val: 'Artificial Intelligence Concepts' },
            { tag: 'DevOps', issue: 'Amazon Web Services (AWS)', val: 'AWS Certified Cloud Practitioner' },
            { tag: 'Security', issue: 'CertiProf', val: 'Cyber Security Foundation Professional Certificate' },
            { tag: 'Agile', issue: 'Scrum Alliance', val: 'Certified ScrumMaster (CSM)' },
            { tag: 'Testing', issue: 'ISTQB', val: 'ISTQB Certified Tester Foundation Level' },
            { tag: 'Leadership', issue: 'Kaiser Permanente', val: 'Business Relationship Management' },
            { tag: 'Technical', issue: 'Tricentis', val: 'Tricentis Tosca Automation Specialist' },
            { tag: 'Data', issue: 'Udemy', val: 'SQL - MySQL for Data Analytics and BI' }
          ].map((cert, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-[#00685f] dark:hover:border-[#00685f]/50 transition-colors break-inside-avoid">
              <span className="inline-block px-2 py-1 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] text-[10px] font-extrabold rounded-md mb-3 uppercase">{cert.tag}</span>
              <p className="font-bold text-sm mb-1 leading-snug">{cert.val}</p>
              <p className="text-xs text-slate-500 font-medium">{cert.issue}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
