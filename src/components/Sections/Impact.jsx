import React from 'react';

export default function Impact() {
  return (
    <section id="impact-section" className="py-24 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px] overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00685f]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Measurable Key Achievements</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300 text-sm font-medium opacity-80 uppercase tracking-widest">Quantifiable outcomes from 14+ years of leadership</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { val: '30%', label: 'Wait Time Reduction', desc: 'Optimized testing pipelines to accelerate product delivery cycles.' },
            { val: '25%', label: 'Test Coverage Growth', desc: 'Expanded validation across complex clinical and mobile workflows.' },
            { val: '60%', label: 'Manual Test Reduction', desc: 'Strategic shift to high-value automation and AI-driven testing.' },
            { val: '100%', label: 'Quality Rating', desc: 'Transformed quality metrics from 40% to full excellence.' },
            { val: '40%', label: 'Cost Reduction', desc: 'Streamlined operations and improved ROI through automation.' },
            { val: '20%', label: 'Faster Resolution', desc: 'Streamlined feedback loops between QA and development teams.' }
          ].map((item, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="text-6xl font-black text-[#00685f] dark:text-[#6bd8cb] mb-6 group-hover:scale-105 transition-transform duration-500">{item.val}</div>
              <div className="space-y-3">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#006c4a] dark:text-[#6bd8cb] opacity-80">{item.label}</div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed min-h-[3rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
