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
    <section id="education-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">Education</h2>
        <div className="space-y-6">
          {degrees.map((edu, i) => (
            <div key={i} className="bg-gradient-to-r from-[#00685f]/10 to-[#eef4ff] dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-[#00685f]/20">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-[#00685f] shadow-sm shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{edu.degree}</h3>
                  <p className="text-[#00685f] dark:text-[#6bd8cb] font-semibold text-sm">{edu.school}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{edu.location}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 ml-16 text-sm italic font-medium">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
