import React from 'react';
import { Award } from 'lucide-react';

const degrees = [
  {
    degree: "Master's in Business Administration — Information Technology",
    school: "Sikkim Manipal University (Distance Education)",
    location: "India",
    date: "Mar 2013 – Mar 2015",
  },
  {
    degree: "Bachelor of Engineering — Information Technology",
    school: "Sardar Patel University (SPU)",
    location: "Vallabh Vidyanagar, India",
    date: "Aug 2007 – Aug 2011",
  },
];

export default function Education() {
  return (
    <section id="education-section" className="py-24 bg-white dark:bg-slate-900 min-h-[600px] relative overflow-hidden">
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00685f]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Education</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
        </div>

        <div className="space-y-10">
          {degrees.map((edu, i) => (
            <div key={i} className="group bg-gradient-to-r from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-[#00685f]/5 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center text-[#00685f] dark:text-[#6bd8cb] shrink-0 group-hover:scale-110 transition-transform duration-500 border border-[#00685f]/5">
                  <Award size={40} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-black font-headline tracking-tight text-slate-800 dark:text-white leading-tight">{edu.degree}</h3>
                    <span className="inline-block px-4 py-2 bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] text-xs font-black rounded-2xl uppercase tracking-widest whitespace-nowrap">
                      {edu.date}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 text-lg">
                    <p className="text-[#00685f] dark:text-[#6bd8cb] font-extrabold italic">{edu.school}</p>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <p className="text-slate-400 dark:text-slate-500 font-bold text-sm tracking-wide uppercase">{edu.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
