import React from 'react';

export default function Projects() {
  return (
    <section id="projects-section" className="py-24 bg-white dark:bg-slate-900 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Featured Projects</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🏥", title: "Kaiser Permanente App", company: "Accenture", desc: "Led QA for 15+ mobile releases, scaled coverage 40%→100%, improved patient wait times by 30%." },
            { icon: "💊", title: "Pharmacy Claims System", company: "Infosys", desc: "Designed Selenium/TestNG frameworks for complex backend claims validation across IBMi RX6 systems." },
            { icon: "🎬", title: "Sony Digital Platform", company: "TCS", desc: "Automated 50+ test cases using Robot Framework, validated ServiceNow modules for global operations." }
          ].map((project, i) => (
            <div key={i} className="group bg-[#f8f9ff] dark:bg-slate-800/80 rounded-3xl p-8 border border-slate-100 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 border-b-4 border-b-[#00685f] hover:-translate-y-2">
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300">{project.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-[#121c28] dark:text-white">{project.title}</h3>
              <p className="text-[10px] text-[#00685f] dark:text-[#6bd8cb] font-black uppercase tracking-[0.2em] mb-6">{project.company}</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{project.desc}</p>
              <div className="pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Global Impact</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
