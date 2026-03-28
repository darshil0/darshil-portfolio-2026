import React from 'react';

export default function Impact() {
  return (
    <section id="impact-section" className="py-20 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-headline mb-4">Measurable Key Achievements</h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">Quantifiable outcomes from 14+ years of leadership.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { val: '30%', label: 'Wait Time Reduction', desc: 'Optimized testing pipelines to accelerate product delivery cycles.' },
            { val: '25%', label: 'Test Coverage Growth', desc: 'Expanded validation across complex clinical and mobile workflows.' },
            { val: '60%', label: 'Manual Test Reduction', desc: 'Strategic shift to high-value automation and AI-driven testing.' },
            { val: '100%', label: 'Quality Rating', desc: 'Transformed quality metrics from 40% to full excellence.' },
            { val: '40%', label: 'Cost Reduction', desc: 'Streamlined operations and improved ROI through automation.' },
            { val: '20%', label: 'Faster Resolution', desc: 'Streamlined feedback loops between QA and development teams.' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-5xl font-extrabold text-[#00685f] dark:text-[#6bd8cb] min-w-[100px]">{item.val}</div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
