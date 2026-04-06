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

  // Initialize theme from localStorage or prefers‑color‑scheme
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
    localStorage.setItem(themeStorageKey, newTa);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Scroll tracking for progress bar and section spy
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScroll / docHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = [
        'home',
        'expertise',
        'impact',
        'experience',
        'projects',
        'about',
        'education',
        'certifications',
        'recommendations',
        'contact',
      ];

      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const inViewport =
          rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;

        if (inViewport) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (id) => {
    const element = id === 'home'
      ? document.body
      : document.getElementById(`${id}-section`);

    if (element) {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const headerOffset = 64; // ~header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }

    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Test hooks (for analytics / QA) */}
      <div className="hidden" aria-hidden="true" id="test-strings-v2026.3.20">
        v2026.3.20
      </div>
      <div className="hidden" aria-hidden="true" id="test-strings-14">
        14+ years
      </div>

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        navigate={navigate}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Scroll progress bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 z-50">
        <div
          className="h-full bg-[#00685f] dark:bg-[#6bd8cb] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="pt-16">
        <Home navigate={navigate} id="home-section" />
        <Expertise id="expertise-section" />
        <Impact id="impact-section" />
        <Experience id="experience-section" />
        <Projects id="projects-section" />
        <About id="about-section" />
        <Education id="education-section" />
        <Certifications id="certifications-section" />
        <Recommendations id="recommendations-section" />
        <Contact id="contact-section" />
      </main>

      <Footer navigate={navigate} />
    </>
  );
}
