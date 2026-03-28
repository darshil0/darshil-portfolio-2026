import React from 'react';
import { Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">Education</h2>
        <div className="bg-gradient-to-r from-[#00685f]/10 to-[#eef4ff] dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-[#00685f]/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-[#00685f] shadow-sm"><Award size={24} /></div>
            <div>
              <h3 className="text-xl font-bold font-headline">Master of Science in Information Technology</h3>
              <p className="text-[#00685f] dark:text-[#6bd8cb] font-semibold text-sm">International Technological University (ITU) | San Jose, California</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-300 ml-16 text-sm italic font-medium">Dec 2017</p>
        </div>
      </div>
    </section>
  );
}
