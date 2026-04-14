import React, { useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, Layout } from 'lucide-react';
import { navItems } from '../../constants/data.js';

export default function Header({ theme, toggleTheme, isMenuOpen, setIsMenuOpen, activeSection, navigate }) {
  // Mobile Scroll Lock & Auto-close on resize
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200/40 dark:border-slate-800/40 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00685f] to-[#004e47] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <Layout size={20} />
          </div>
          <span className="text-xl font-black tracking-tight font-headline bg-clip-text text-transparent bg-gradient-to-r from-[#00685f] to-[#121c28] dark:from-[#6bd8cb] dark:to-white">
            The Clinical Architect
          </span>
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              <button
                className="text-sm font-medium text-[#121c28] dark:text-gray-300 hover:text-[#00685f] dark:hover:text-[#6bd8cb] transition-colors py-2 flex items-center gap-1"
                aria-haspopup="true"
              >
                More <ChevronDown size={14} />
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
        <div id="mobile-menu" className="fixed inset-0 top-16 bg-white dark:bg-slate-900 z-[60] p-6 flex flex-col space-y-4 overflow-y-auto lg:hidden">
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
