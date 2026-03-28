import React from 'react';

export default function Projects() {
  return (
    <section id="projects-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold font-headline mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🏥", title: "Kaiser Permanente App", company: "Accenture", desc: "Led QA for 15+ mobile releases, scaled coverage 40%→100%, improved patient wait times by 30%." },
            { icon: "💊", title: "Pharmacy Claims System", company: "Infosys", desc: "Designed Selenium/TestNG frameworks for complex backend claims validation across IBMi RX6 systems." },
            { icon: "🎬", title: "Sony Digital Platform", company: "TCS", desc: "Automated 50+ test cases using Robot Framework, validated ServiceNow modules for global operations." }
          ].map((project, i) => (
            <div key={i} className="bg-[#f8f9ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all border-b-4 border-b-[#00685f]">
              <div className="text-4xl mb-6">{project.icon}</div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs text-[#00685f] dark:text-[#6bd8cb] font-black uppercase mb-4">{project.company}</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
