import React from 'react';
import { Sun, Moon, Menu, X, TrendingUp, Layout } from 'lucide-react';
import { navItems } from '../../constants/data.js';

export default function Header({ theme, toggleTheme, isMenuOpen, setIsMenuOpen, activeSection, navigate }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('home')}>
          <Layout className="text-[#00685f] dark:text-[#6bd8cb]" size={24} />
          <span className="text-lg font-bold tracking-tight font-headline">The Clinical Architect</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 text-[#121c28] dark:text-slate-300 hover:bg-[#00685f]/5 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#121c28] dark:text-white lg:hidden"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} id="menu-icon" /> : <Menu size={24} id="menu-icon" />}
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {[
              { id: 'expertise', label: 'Expertise' },
              { id: 'impact', label: 'Impact' },
              { id: 'experience', label: 'Experience' }
            ].map(item => (
              <button 
                key={item.id}
                onClick={() => navigate(item.id)} 
                className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-[#00685f] dark:text-[#6bd8cb] font-bold' : 'text-[#121c28] dark:text-gray-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb]'}`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative group">
              <button className={`text-sm font-medium text-[#121c28] dark:text-gray-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb] transition-colors py-2 flex items-center gap-1`}>
                More <TrendingUp size={14} className="rotate-90" />
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-2 min-w-[200px] animate-in fade-in slide-in-from-top-2">
                {navItems.filter(item => !['expertise', 'impact', 'experience'].includes(item.id)).map(item => (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => navigate(item.id)}
                    className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-[#00685f]/10 transition-colors ${activeSection === item.id ? 'text-[#00685f] dark:text-[#6bd8cb] font-bold bg-[#00685f]/5' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              id="nav-contact"
              onClick={() => navigate('contact')}
              className={`px-4 py-2 bg-[#00685f] text-white rounded-lg font-bold hover:opacity-90 transition-opacity ${activeSection === 'contact' ? 'ring-2 ring-offset-2 ring-[#00685f]' : ''}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-40 p-6 flex flex-col space-y-4 overflow-y-auto lg:hidden">
          <button id="nav-home-m" onClick={() => navigate('home')} className={`text-left py-2 text-lg font-semibold ${activeSection === 'home' ? 'text-[#00685f] dark:text-[#6bd8cb]' : ''}`}>Home</button>
          {navItems.map(item => (
            <button
              key={item.id}
              id={`nav-${item.id}-m`}
              onClick={() => navigate(item.id)}
              className={`text-left py-2 text-lg font-semibold ${activeSection === item.id ? 'text-[#00685f] dark:text-[#6bd8cb]' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button id="nav-contact-m" onClick={() => navigate('contact')} className={`text-left py-2 text-lg font-semibold ${activeSection === 'contact' ? 'text-[#00685f] dark:text-[#6bd8cb] font-black' : 'text-slate-800 dark:text-white'}`}>Contact</button>
        </div>
      )}
    </header>
  );
}
