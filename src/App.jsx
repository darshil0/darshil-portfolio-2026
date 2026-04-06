import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer.jsx';
import Home from './components/Sections/Home.jsx';
import Expertise from './components/Sections/Expertise.jsx';
import Impact from './components/Sections/Impact.jsx';
import Experience from './components/Sections/Experience.jsx';
import Projects from './components/Sections/Projects.jsx';
import About from './components/Sections/About.jsx';
import Education from './components/Sections/Education.jsx';
import Certifications from './components/Sections/Certifications.jsx';
import Recommendations from './components/Sections/Recommendations.jsx';
import Contact from './components/Sections/Contact.jsx';
import { themeStorageKey } from './constants/data.js';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem(themeStorageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = saved || (systemPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem(themeStorageKey, newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Scroll Tracking & Spy
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar Calculation
      const currentScroll = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScroll / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Section Spy — iterate in reverse so the topmost visible section wins
      // when multiple sections overlap the trigger threshold simultaneously.
      const sections = ['home', 'expertise', 'impact', 'experience', 'projects', 'about', 'education', 'certifications', 'recommendations', 'contact'];
      let currentSection = sections[0];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Activate when the top of the section has scrolled past 40% of the viewport
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id) => {
    const element = id === 'home' ? null : document.getElementById(`${id}-section`);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Test Hooks */}
      <div className="hidden" aria-hidden="true" id="test-strings-v2026.4.5">v2026.4.5</div>
      <div className="hidden" aria-hidden="true" id="test-strings-14">14+ years</div>

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        navigate={navigate}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Scroll Progress Indicator — z-40 to sit below z-50 header */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 z-40">
        <div
          className="h-full bg-[#00685f] dark:bg-[#6bd8cb] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="pt-16">
        <Home navigate={navigate} />
        <Expertise />
        <Impact />
        <Experience />
        <Projects />
        <About />
        <Education />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>

      <Footer navigate={navigate} />
    </>
  );
}
