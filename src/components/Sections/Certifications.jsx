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
    <section id="certifications-section" className="py-20 bg-[#f8f9ff] dark:bg-slate-800 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12 flex items-center gap-3">
          <ShieldCheck size={36} className="text-[#00685f] dark:text-[#6bd8cb]" /> Licenses & Certifications
        </h2>
        {/*
          Fix: removed `space-y-6` from the columns container. The `space-y-*`
          utility targets `> * + *` with margin-top, which conflicts with CSS
          multi-column layout — it bleeds margin across column boundaries and
          causes the first card in each column after the first to gain unwanted
          top space. Use only `gap-6` (for column gutters) and `mb-6` on each
          card to control vertical rhythm inside columns.
        */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="mb-6 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-[#00685f] transition-colors break-inside-avoid">
              <span className="inline-block px-2 py-1 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] text-[10px] font-extrabold rounded-md mb-3 uppercase">{cert.tag}</span>
              <p className="font-bold text-sm mb-1 leading-snug">{cert.val}</p>
              <p className="text-xs text-slate-500 font-medium">
                {cert.issue}
                {cert.date && (
                  <>
                    <span className="mx-1.5 opacity-50">·</span>
                    {cert.date}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
