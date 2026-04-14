import React from 'react';
import { Verified, TrendingUp, UserCheck } from 'lucide-react';

export default function Home({ navigate }) {
  return (
    <section id="home-section" className="relative min-h-[85vh] flex items-center overflow-hidden py-24 bg-gradient-to-br from-[#eef4ff] via-[#f8f9ff] to-white dark:from-slate-900 dark:via-[#0b111a] dark:to-[#121c28]">
      {/* Dynamic background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00685f]/5 dark:bg-[#6bd8cb]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00685f]/5 dark:bg-[#6bd8cb]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 max-w-4xl text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-[#00685f]/5 border border-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] text-[11px] tracking-[0.2em] font-black mb-10 uppercase animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto lg:mx-0">
            <Verified size={16} /> Precision Digital Transformation
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-headline leading-[1.1] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Global Healthcare <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00685f] to-[#00a394] dark:from-[#6bd8cb] dark:to-white italic">QA Leadership</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12 max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mx-auto lg:mx-0">
            I lead QA teams that prevent patient safety risks and drive measurable business impact. Pioneering AI-powered testing to build safer, smarter healthcare innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <button onClick={() => navigate('impact')} className="px-8 py-5 bg-[#00685f] text-white rounded-[2rem] font-black shadow-2xl shadow-[#00685f]/20 flex items-center justify-center gap-3 hover:bg-[#00514a] hover:scale-105 transition-all duration-300 group">
              View Proven Results <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('expertise')} className="px-8 py-5 bg-white dark:bg-slate-800 text-[#121c28] dark:text-white rounded-[2rem] font-black border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300">
              Core Competencies
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/60 dark:border-slate-700/60 shadow-[0_32px_64px_-16px_rgba(0,104,95,0.1)]">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00685f] to-[#004e47] flex items-center justify-center text-white shadow-xl"><UserCheck size={32} /></div>
              <div className="text-left">
                <h3 className="font-black text-xl tracking-tight">Darshil Shah</h3>
                <p className="text-xs font-bold text-[#00685f] dark:text-[#6bd8cb] uppercase tracking-widest mt-1">QA Lead & Digital Strategist</p>
              </div>
            </div>
            <div className="space-y-6">
              {[{ label: 'Wait Time Reduction', val: '30%' }, { label: 'Test Coverage Growth', val: '+25%' }, { label: 'Quality Rating', val: '100%' }].map((stat, i, arr) => (
                <div key={i} className={`flex justify-between items-center ${i !== arr.length - 1 ? 'border-b border-[#00685f]/5 dark:border-slate-700/50 pb-5' : ''}`}>
                  <span className="text-slate-600 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">{stat.label}</span>
                  <span className="text-3xl font-black text-[#00685f] dark:text-[#6bd8cb] tracking-tighter">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
