import React from 'react';
import { Layout } from 'lucide-react';
import { navItems } from '../../constants/data.js';

export default function Footer({ navigate }) {
  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Layout className="text-[#00685f]" size={20} />
          <span className="font-headline font-extrabold">The Clinical Architect</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <button
            onClick={() => navigate('home')}
            className="text-xs font-bold text-slate-400 hover:text-[#00685f] uppercase tracking-widest transition-colors"
          >
            Home
          </button>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="text-xs font-bold text-slate-400 hover:text-[#00685f] uppercase tracking-widest transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="text-xs font-bold text-slate-400 hover:text-[#00685f] uppercase tracking-widest transition-colors"
          >
            Contact
          </button>
        </div>
        <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-medium">
          © 2026 Darshil Shah. QA Leadership & Digital Excellence. v2026.4.5
        </p>
      </div>
    </footer>
  );
}
