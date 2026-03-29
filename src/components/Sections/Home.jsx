import React from 'react';
import { Verified, TrendingUp, UserCheck } from 'lucide-react';

export default function Home({ navigate }) {
  return (
    <section id="home-section" className="relative min-h-[600px] flex items-center overflow-hidden py-12 bg-gradient-to-b from-[#eef4ff] to-[#f8f9ff] dark:from-slate-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] text-[10px] tracking-wider font-bold mb-6 uppercase">
          <Verified size={14} /> Expert Transformation
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight mb-6">
          Global Healthcare QA Leader | <span className="text-[#00685f] dark:text-[#6bd8cb] italic">14+ Years in AI/ML, Digital Health & Compliance</span> | Ex-Accenture, Kaiser, Infosys
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-3xl">
          I lead QA teams that do far more than find bugs — we prevent patient safety risks, drive measurable business impact, and enable safer, smarter healthcare innovation. Pioneering AI-powered testing using LLMs and generative AI to enhance accuracy and scalability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={() => navigate('impact')} className="px-6 py-4 bg-[#00685f] text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-[#00514a] transition-colors">
            View Proven Results <TrendingUp size={16} />
          </button>
          <button onClick={() => navigate('expertise')} className="px-6 py-4 bg-[#d9e3f4] dark:bg-slate-800 text-[#121c28] dark:text-white rounded-xl font-bold hover:bg-[#c8d5ed] transition-colors">
            Core Competencies
          </button>
        </div>
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 shadow-xl max-w-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00685f]/10 flex items-center justify-center text-[#00685f] dark:text-[#6bd8cb]"><UserCheck size={24} /></div>
            <div>
              <h3 className="font-bold text-base">Darshil Shah</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">QA Lead & Digital Strategist</p>
            </div>
          </div>
          <div className="space-y-4">
            {[{ label: 'Wait Time Reduction', val: '30%' }, { label: 'Test Coverage Growth', val: '+25%' }, { label: 'Quality Rating', val: '100%' }].map((stat, i, arr) => (
              <div key={i} className={`flex justify-between items-center ${i !== arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-700 pb-3' : ''}`}>
                <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{stat.label}</span>
                <span className="text-xl font-extrabold text-[#006c4a] dark:text-[#6bd8cb]">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
