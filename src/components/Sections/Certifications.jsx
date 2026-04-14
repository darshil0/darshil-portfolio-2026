import React from 'react';
import { ShieldCheck } from 'lucide-react';

const certs = [
  { tag: 'AI/ML', issue: 'Anthropic', val: 'Agent Skills with Anthropic', date: 'Mar 2026' },
  { tag: 'AI/ML', issue: 'DeepLearning.AI', val: 'Claude Code in Action', date: 'Mar 2026' },
  { tag: 'AI/ML', issue: 'Anthropic', val: 'Introduction to MCP', date: 'Oct 2025' },
  { tag: 'AI/ML', issue: 'Anthropic', val: 'AI Fluency Framework & Foundations', date: 'Aug 2025' },
  { tag: 'Agile', issue: 'Scrum Inc.', val: 'Registered Scrum Basics™', date: 'Aug 2025' },
  { tag: 'AI/ML', issue: 'IBM', val: 'Becoming an AI Agent Architect', date: 'Jul 2025' },
  { tag: 'AI/ML', issue: 'Coursera', val: 'ChatGPT Prompt Engineering for Developers', date: 'Jul 2025' },
  { tag: 'DevOps', issue: 'Google', val: 'MLOps for Generative AI', date: 'Jun 2025' },
  { tag: 'AI/ML', issue: 'IBM', val: 'Generative AI in Action', date: 'Jun 2025' },
  { tag: 'Technical', issue: 'Microsoft', val: 'Microsoft Copilot Foundations', date: 'Jun 2025' },
  { tag: 'Cloud', issue: 'Amazon Web Services', val: 'AWS Cloud Practitioner Essentials', date: 'May 2025' },
  { tag: 'Leadership', issue: 'PMI', val: 'Generative AI for Project Managers', date: 'Mar 2025' },
  { tag: 'AI/ML', issue: 'Anthropic', val: 'Foundations of Prompt Engineering', date: '' },
  { tag: 'AI/ML', issue: 'Anthropic', val: 'Introduction to Generative AI', date: '' },
  { tag: 'Agile', issue: 'Scrum Alliance', val: 'The Basics of Scrum', date: '' },
];

export default function Certifications() {
  return (
    <section id="certifications-section" className="py-24 bg-[#f8f9ff] dark:bg-slate-800 min-h-[600px] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00685f]/10 flex items-center justify-center text-[#00685f] dark:text-[#6bd8cb]">
              <ShieldCheck size={32} />
            </div>
            Licenses & Certifications
          </h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="mb-8 group bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 break-inside-avoid">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-block px-3 py-1.5 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] text-[10px] font-black rounded-xl uppercase tracking-widest border border-[#00685f]/5">
                  {cert.tag}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#00685f] opacity-20 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="font-black text-lg mb-2 leading-tight text-slate-800 dark:text-white group-hover:text-[#00685f] dark:group-hover:text-[#6bd8cb] transition-colors">{cert.val}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-tight">
                <span>{cert.issue}</span>
                {cert.date && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-[#00685f] dark:text-[#6bd8cb]/70">{cert.date}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
