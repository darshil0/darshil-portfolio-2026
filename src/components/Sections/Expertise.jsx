import React from 'react';
import { Users } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise-section" className="py-24 bg-white dark:bg-slate-900 min-h-[600px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Core Expertise & Competencies</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-[#eef4ff] dark:bg-slate-800/50 rounded-3xl p-10 border border-slate-100 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-8 text-[#121c28] dark:text-white">Functional & E2E Testing</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Web & Mobile E2E', 'Selenium & Playwright', 'Appium Mobile', 'Postman & API'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white dark:bg-slate-700 text-[#00685f] dark:text-[#6bd8cb] rounded-xl text-xs font-bold shadow-sm border border-[#00685f]/5 group-hover:border-[#00685f]/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Implementing high-precision functional validation and end-to-end testing strategies for mission-critical clinical applications and patient-facing platforms.
            </p>
          </div>
          <div className="group bg-gradient-to-br from-[#00685f] to-[#004e47] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between">
            <div>
              <Users size={56} className="mb-8 text-[#89f5e7] opacity-90 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-bold mb-4">Team Leadership & Mentorship</h3>
              <p className="text-[#89f5e7] leading-relaxed text-base opacity-95">
                Building and mentoring high-performance QE teams, fostering technical excellence across global delivery units. Leading teams of 15+ SDETs.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">Quality Excellence</span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#00685f] bg-[#89f5e7]/20 backdrop-blur-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
