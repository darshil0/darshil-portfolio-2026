import React, { useState, useEffect } from 'react';
import { 
  Linkedin, GraduationCap, CheckCircle, Rocket, Brain, Cloud, Users,
  Sun, Moon, TrendingUp, Copy, Check, Menu, X, Verified, UserCheck, Layout
} from 'lucide-react';

export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      console.error("Theme toggle failed", e);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('darshils99@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'expertise', label: 'Expertise' },
    { id: 'impact', label: 'Impact' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'recommendations', label: 'Recommendations' }
  ];

  const navigate = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-[#f8f9ff] text-[#121c28]'}`}>

      {/* Scroll Progress Bar (Bug 5 Fix) */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        <div
          className="h-full bg-[#00685f] dark:bg-[#6bd8cb] transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* TopAppBar */}
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
              <div className="relative group">
                <button className="text-sm font-medium hover:text-[#00685f] dark:hover:text-[#6bd8cb] transition-colors py-2 flex items-center gap-1">
                  Menu <TrendingUp size={14} className="rotate-90" />
                </button>
                <div className="absolute right-0 top-full hidden group-hover:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-2 min-w-[200px] animate-in fade-in slide-in-from-top-2">
                  {navItems.map(item => (
                    <button
                      key={item.id}
                      id={`nav-${item.id}`}
                      onClick={() => navigate(item.id)}
                      className={`w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-[#00685f]/10 transition-colors ${activeSection === item.id ? 'text-[#00685f] font-bold bg-[#00685f]/5' : 'text-slate-600 dark:text-slate-300'}`}
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

        {/* Mobile Menu (Bug 6 Fix) */}
        {isMenuOpen && (
          <div id="mobile-menu" className="fixed inset-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-40 p-6 flex flex-col space-y-4 overflow-y-auto lg:hidden">
            <button id="nav-home-m" onClick={() => navigate('home')} className={`text-left py-2 text-lg font-semibold ${activeSection === 'home' ? 'text-[#00685f]' : ''}`}>Home</button>
            {navItems.map(item => (
              <button
                key={item.id}
                id={`nav-${item.id}-m`}
                onClick={() => navigate(item.id)}
                className={`text-left py-2 text-lg font-semibold ${activeSection === item.id ? 'text-[#00685f]' : ''}`}
              >
                {item.label}
              </button>
            ))}
            <button id="nav-contact-m" onClick={() => navigate('contact')} className={`text-left py-2 text-lg font-semibold text-[#00685f] dark:text-[#6bd8cb] ${activeSection === 'contact' ? 'font-black' : ''}`}>Contact</button>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section id="home-section" className="relative min-h-[600px] flex items-center overflow-hidden py-12">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#eef4ff]/90 dark:from-slate-900/90 to-[#f8f9ff] dark:to-slate-900"></div>
              <img
                className="w-full h-full object-cover opacity-10"
                alt="modern medical technology interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdEGHvSAdcjp0hOePzuuH_uB1LTAIpO4v7jdOeN3W4R3i6nUT9Il_Wsy9S00yE-bvI1WamTUhqBFfrQDvH3svE5xO4ZibEgZZbaUq8CIbpRoQq2VyGg_RzoUH083To89zyoaSXLalE9RgfNPcvJ_8IcT8-GZa1PEV6hkaHiRBwt1Ikc46mAotWep7avfMpNWk5WqVM14hySnzG_29GMMtBvLc7WHefX4x8v7PIynvv35XWHW95EXnnOOyekKoARp2T4tinwDJQ6EQP"
              />
            </div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00685f]/10 text-[#00685f] dark:text-[#6bd8cb] text-[10px] tracking-wider font-bold mb-6 uppercase">
                <Verified size={14} /> Expert Transformation
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline leading-tight tracking-tight mb-6">
                QA Leadership & Digital Transformation Expert | <span className="text-[#00685f] dark:text-[#6bd8cb] italic">14+ Years Experience</span> | AWS Certified
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-3xl">
                I lead high-impact QA programs for Fortune 500 healthcare organizations, combining AI-driven automation with deep regulatory expertise to ensure patient safety and business excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={() => navigate('impact')} className="px-6 py-4 bg-[#00685f] text-white rounded-xl font-bold text-center shadow-lg shadow-[#00685f]/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  View Proven Results <TrendingUp size={16} />
                </button>
                <button onClick={() => navigate('expertise')} className="px-6 py-4 bg-[#d9e3f4] dark:bg-slate-800 text-[#121c28] dark:text-white rounded-xl font-bold text-center active:scale-95 transition-transform">
                  Core Competencies
                </button>
              </div>

              <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-6 border border-white/40 dark:border-slate-700/40 shadow-xl max-w-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#00685f]/10 flex items-center justify-center text-[#00685f] dark:text-[#6bd8cb]">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Darshil Shah</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">QA Lead & Digital Strategist</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Wait Time Reduction', val: '30%' },
                    { label: 'Test Coverage Growth', val: '+25%' },
                    { label: 'Quality Rating', val: '100%' }
                  ].map((stat, i) => (
                    <div key={i} className={`flex justify-between items-center ${i !== 2 ? 'border-b border-slate-100 dark:border-slate-700 pb-3' : ''}`}>
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">{stat.label}</span>
                      <span className="text-xl font-extrabold text-[#006c4a] dark:text-[#6bd8cb]">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Expertise Section */}
        {activeSection === 'expertise' && (
          <section id="expertise-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold font-headline mb-3">Core Expertise & Competencies</h2>
                <div className="w-16 h-1.5 bg-[#00685f] rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#eef4ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl font-bold mb-6">Functional & E2E Testing</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Web & Mobile E2E', 'Selenium & Playwright', 'Appium Mobile', 'Postman & API'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-white dark:bg-slate-700 text-[#00685f] dark:text-[#6bd8cb] rounded-lg text-xs font-semibold shadow-sm border border-[#00685f]/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Implementing high-precision functional validation and end-to-end testing strategies for mission-critical clinical applications and patient-facing platforms.
                  </p>
                </div>
                <div className="bg-[#00685f] rounded-2xl p-8 text-white">
                  <Users size={48} className="mb-6 opacity-80" />
                  <h3 className="text-xl font-bold mb-4">Team Leadership & Mentorship</h3>
                  <p className="text-[#89f5e7] leading-relaxed text-sm">
                    Building and mentoring high-performance QE teams, fostering technical excellence across global delivery units. Leading teams of 15+ SDETs.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Impact Section */}
        {activeSection === 'impact' && (
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
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section id="experience-section" className="py-20 bg-[#f8f9ff] dark:bg-slate-900 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col mb-12">
                <h2 className="text-3xl font-extrabold font-headline mb-3">Professional Journey</h2>
                <div className="w-16 h-1.5 bg-[#00685f] rounded-full mb-4"></div>
                <p className="text-slate-600 dark:text-slate-300 text-sm italic font-medium">14+ years of high-impact testing leadership.</p>
              </div>
              <div className="space-y-6">
                {[
                  { code: 'PHY', role: 'IT QA Analyst', company: 'Phynix Tech Services', date: 'Feb 2025 - Present', bullets: ['Designing and executing comprehensive test plans.', 'Performing manual and automated testing for web and mobile applications in Agile environments.'] },
                  { code: 'ACC', role: 'Global Healthcare QA Lead', company: 'Accenture (Kaiser Permanente)', date: '2023 - 2025', bullets: ['Led 15+ onshore/offshore QA team across 15+ mobile releases for healthcare clients.', 'Scaled test coverage 40%→100%, improved patient wait times 30%, reduced manual testing 60%.', 'Designed Appium/Selenium automation frameworks, integrated ChatGPT for intelligent test generation.'] },
                  { code: 'ACC', role: 'Sr. QA Automation Engineer', company: 'Accenture (Kaiser Permanente)', date: '2020 - 2022', bullets: ['Led comprehensive validation efforts, reducing defect leakage below 5%.', 'Improved product quality from 50% to 90% via robust automation strategies.', 'Earned Accenture 3-Year Service Award & client recognition for technical excellence.'] },
                  { code: 'INF', role: 'SDET', company: 'Infosys (Prime Therapeutics)', date: '2019 - 2020', bullets: ['Designed robust Selenium/TestNG automation frameworks with POM for pharmacy system.', 'Boosted testing efficiency 40%, enhanced regression test coverage reliability.', 'Validated complex pharmacy claims via SQL analysis and JSON cross-referencing.'] },
                  { code: 'TCS', role: 'Platform Automation Engineer', company: 'TCS (Sony Pictures)', date: '2019', bullets: ['Developed and automated 50+ test cases using Robot Framework & Selenium2Library.', 'Automated ServiceNow modules (Demand, Incident management), improved operational efficiency.'] },
                  { code: 'FRE', role: 'QA Automation Engineer', company: 'Freelance', date: '2017 - 2019', bullets: ['Created comprehensive test cases and automation test suites using Selenium WebDriver, TestNG, Maven.', 'Performed functional, regression, UI, integration testing across multiple industries and clients.'] },
                  { code: 'ETE', role: 'QA Engineer', company: 'Eternal Web Pvt. Ltd.', date: '2011 - 2017', bullets: ['Developed & executed detailed test cases in JIRA, functional, smoke, regression, SIT testing.', 'Executed cross-browser testing, SQL validation, peer reviews, Agile/Scrum collaboration.'] }
                ].map((exp, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00685f]/5 flex items-center justify-center text-[#00685f] font-bold text-xs shrink-0 border border-[#00685f]/10">{exp.code}</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-bold font-headline leading-tight">{exp.role}</h3>
                          <span className="px-2 py-1 bg-[#006c4a]/10 text-[#006c4a] dark:text-[#6bd8cb] text-[9px] font-extrabold rounded-md shrink-0 uppercase tracking-wider">{exp.date}</span>
                        </div>
                        <p className="text-[#00685f] dark:text-[#6bd8cb] font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed list-disc ml-4 space-y-1">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section id="projects-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold font-headline mb-12">Featured Projects</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: "🏥", title: "Kaiser Permanente App", company: "Accenture", desc: "Led QA for 15+ mobile releases, scaled coverage 40%→100%, improved patient wait times by 30%." },
                  { icon: "💊", title: "Pharmacy Claims System", company: "Infosys", desc: "Designed Selenium/TestNG frameworks for complex backend claims validation across IBMi RX6 systems." },
                  { icon: "🎬", title: "Sony Digital Platform", company: "TCS", desc: "Automated 50+ test cases using Robot Framework, validated ServiceNow modules for global operations." }
                ].map((project, i) => (
                  <div key={i} className="bg-[#f8f9ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all border-b-4 border-b-[#00685f]">
                    <div className="text-4xl mb-6">{project.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-xs text-[#00685f] dark:text-[#6bd8cb] font-black uppercase mb-4">{project.company}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about-section" className="py-20 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold font-headline mb-12">About My Mission</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm">
                    <p className="text-lg leading-relaxed mb-6 italic text-[#00685f] dark:text-[#6bd8cb] font-medium">
                      "Quality is not just a process in healthcare—it is a commitment to patient safety."
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      My goal is to transition Quality Assurance from a procedural step into a strategic asset. I specialize in AI-Augmented QA, using Agentic AI to identify risks before they reach clinical settings.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      I have managed global testing operations at Accenture and developed high-precision automation at Prime Therapeutics, working closely with clinicians, data scientists, and engineering teams.
                    </p>
                  </div>
                </div>
                <div className="bg-[#00685f] rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Darshil Shah</h3>
                  <p className="text-sm opacity-80 mb-6">Global Healthcare QA Leader</p>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> US Citizen</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> 14+ Years Experience</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> AWS Certified</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-[#89f5e7]" /> Dallas-Fort Worth, TX</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section id="education-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold font-headline mb-12">Academic Background</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { deg: "MBA, Information Technology", school: "Sikkim Manipal University", date: "2013 - 2015" },
                  { deg: "BE, Information Technology", school: "Sardar Patel University", date: "2007 - 2011" }
                ].map((edu, i) => (
                  <div key={i} className="bg-[#f8f9ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-[#00685f] text-white flex items-center justify-center shrink-0">
                      <GraduationCap size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold leading-tight mb-2">{edu.deg}</h3>
                      <p className="text-[#00685f] dark:text-[#6bd8cb] font-bold text-sm mb-1">{edu.school}</p>
                      <p className="text-slate-400 text-xs">{edu.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <section id="certifications-section" className="py-20 bg-[#eef4ff] dark:bg-slate-800 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold font-headline mb-12">Professional Credentials</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  { cat: "AI & Intelligent Agents", icon: <Brain />, certs: ["Agent Skills with Anthropic", "Claude Code in Action", "Introduction to MCP", "Becoming an AI Agent Architect", "AI Fluency Framework"] },
                  { cat: "Cloud & Tech", icon: <Cloud />, certs: ["AWS Cloud Practitioner", "Microsoft Copilot Foundations", "MLOps for Generative AI", "ChatGPT Prompt Engineering", "Foundations of Prompt Eng."] },
                  { cat: "Agile & Leadership", icon: <Users />, certs: ["Registered Scrum Basics", "GenAI for Project Managers", "Treasure Hunt for AI Skills"] }
                ].map((group, i) => (
                  <div key={i} className="space-y-6">
                    <h3 className="text-xl font-bold flex items-center gap-2">{group.icon} {group.cat}</h3>
                    <div className="space-y-3">
                      {group.certs.map(cert => (
                        <div key={cert} className="bg-white dark:bg-slate-900 rounded-xl p-4 text-xs font-bold border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-[#00685f] transition-colors">
                          <CheckCircle size={14} className="text-[#00685f]" /> {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <a href="https://linkedin.com/in/darshil-qa-lead" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#00685f] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                  <Linkedin size={20} /> View All 130+ Credentials
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Recommendations Section */}
        {activeSection === 'recommendations' && (
          <section id="recommendations-section" className="py-20 bg-white dark:bg-slate-900 min-h-[600px]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-extrabold font-headline mb-12">Colleague Recommendations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Diana Abdullaeva", title: "Software QA Engineer", quote: "Working with Darshil was an absolute pleasure... His deep understanding of automation frameworks and ability to break down complex challenges is unmatched." },
                  { name: "Prem Nair, PMP", title: "Senior Leader", quote: "Darshil is an amazing QA lead Engineer. His strategic approach and proactive risk management consistently delivered results." },
                  { name: "Karam Bhangu", title: "Scrum Master", quote: "Darshil played an instrumental role in testing deliverables... recognized by our end client for his technical and leadership qualities." }
                ].map((rec, i) => (
                  <div key={i} className="bg-[#f8f9ff] dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 relative flex flex-col h-full hover:shadow-lg transition-shadow">
                    <p className="text-slate-600 dark:text-slate-300 italic mb-8 text-sm leading-relaxed">"{rec.quote}"</p>
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rec.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{rec.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section id="contact-section" className="py-24 bg-[#d9e3f4] dark:bg-slate-800 min-h-[600px]">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-extrabold font-headline mb-6">Drive Your Digital Transformation.</h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-12 px-4">
                I am seeking leadership opportunities where I can leverage my healthcare expertise and AI-driven testing strategies to build world-class engineering organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className="px-8 py-5 bg-[#00685f] text-white rounded-xl font-extrabold text-lg shadow-2xl shadow-[#00685f]/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
                  href="mailto:darshils99@gmail.com"
                >
                  <Rocket size={24} /> Partner for Growth
                </a>
                <button
                  onClick={copyEmail}
                  className="px-8 py-5 bg-white dark:bg-slate-700 text-[#00685f] dark:text-[#6bd8cb] border-2 border-[#00685f]/10 rounded-xl font-bold text-lg active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  {copied ? <Check size={24} /> : <Copy size={24} />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>
              <div className="mt-16 flex justify-center gap-8 border-t border-slate-200/20 pt-12">
                <a className="text-slate-400 hover:text-[#00685f] transition-colors text-sm font-semibold" href="https://linkedin.com/in/darshil-qa-lead">LinkedIn</a>
                <a className="text-slate-400 hover:text-[#00685f] transition-colors text-sm font-semibold" href="https://github.com/darshil0">GitHub</a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Layout className="text-[#00685f]" size={20} />
            <span className="font-headline font-extrabold">The Clinical Architect</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
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
            © 2026 Darshil Shah. QA Leadership & Digital Excellence. v2026.3.20
          </p>
        </div>
      </footer>
    </div>
  );
}
