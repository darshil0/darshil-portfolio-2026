import React from 'react';
import { Users } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold font-headline mb-3">Core Expertise & Competencies</h2>
          <div className="w-16 h-1.5 bg-[#00685f] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#eef4ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-6">Functional & E2E Testing</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Web & Mobile E2E', 'Selenium & Playwright', 'Appium Mobile', 'Postman & API'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-700 text-[#00685f] dark:text-[#6bd8cb] rounded-lg text-xs font-semibold shadow-sm border border-[#00685f]/5">
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Implementing high-precision functional validation and end-to-end testing strategies for mission-critical clinical applications and patient-facing platforms.
            </p>
          </div>
          <div className="bg-[#00685f] rounded-2xl p-8 text-white">
            <Users size={48} className="mb-6 opacity-80" />
            <h3 className="text-xl font-bold mb-4">Team Leadership & Mentorship</h3>
            <p className="text-[#89f5e7] leading-relaxed text-sm">
              Building and mentoring high-performance QE teams, fostering technical excellence across global delivery units. Leading teams of 15+ SDETs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
