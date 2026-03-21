import React, { useState, useEffect } from 'react';
import { 
  Download, Github, Linkedin, Mail, MapPin, FileText, 
  Award, Briefcase, Code2, Heart, Phone, GraduationCap, 
  Globe, Bookmark, CheckCircle, Search, Wrench, Rocket, 
  ShieldCheck, Zap, Star, BookOpen, Brain, Cloud, Users,
  Sun, Moon, AlertTriangle
} from 'lucide-react';

export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);
  // FIX #1: Declare isMenuOpen state (was used but never declared)
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
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'recommendations', label: 'Recommendations' }
  ];

  const navigate = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-slate-900'}`}>
      {/* FIX #3: Cleaned up nav — removed duplicate navItems rendering and fixed isDarkMode → theme === 'dark' */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-slate-100">Darshil Shah</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm font-semibold transition ${
                  activeSection === item.id
                    ? 'text-teal-600 font-bold'
                    : 'text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Controls: theme toggle + mobile hamburger */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-900 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left py-2 font-semibold ${
                  activeSection === item.id
                    ? 'text-teal-600'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    Global Healthcare<br />QA Leader
                  </h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xl text-teal-600 font-semibold italic">AI-Driven Testing & Automation Engineer</p>
                    <span className="text-[10px] bg-teal-100 text-teal-700 font-bold px-2 py-1 rounded border border-teal-200 uppercase tracking-widest shadow-sm">US Citizen</span>
                  </div>
                </div>

                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                  I lead high-impact QA programs for Fortune 500 healthcare organizations, combining AI-driven automation with deep regulatory expertise to ensure patient safety and business excellence.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 rounded-full text-xs font-bold text-teal-700 dark:text-teal-400 shadow-sm flex items-center gap-2">
                    <Heart size={14} className="text-emerald-500" /> Healthcare Tech
                  </span>
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 rounded-full text-xs font-bold text-teal-700 dark:text-teal-400 shadow-sm flex items-center gap-2">
                    <Rocket size={14} className="text-emerald-500" /> Agentic AI
                  </span>
                  <span className="px-4 py-2 bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 rounded-full text-xs font-bold text-teal-700 dark:text-teal-400 shadow-sm flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-500" /> Cloud QA Ops
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {[
                    { val: '40%', label: 'Cost Reduction' },
                    { val: '30%', label: 'Wait Times' },
                    { val: '100%', label: 'Test Coverage' },
                    { val: '60%', label: 'Automation ROI' },
                    { val: '15+', label: 'Teams Led' },
                    { val: '5%', label: 'Defect Leakage' },
                  ].map(({ val, label }) => (
                    <div key={label} className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-teal-100 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{val}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-tighter">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-lg shadow-emerald-200">
                    <Download size={20} />
                    <span>Download Portfolio PDF</span>
                  </a>
                  <a href="mailto:darshils99@gmail.com" className="flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold transition active:scale-95">
                    <Mail size={20} />
                    <span>Get In Touch</span>
                  </a>
                </div>

                <div className="flex items-center space-x-6 pt-8">
                  <a href="https://linkedin.com/in/darshil-qa-lead" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 transition" aria-label="LinkedIn">
                    <Linkedin size={26} />
                  </a>
                  <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-teal-600 transition" aria-label="GitHub">
                    <Github size={26} />
                  </a>
                  <button onClick={copyEmail} className="text-slate-500 dark:text-slate-400 hover:text-teal-600 transition flex items-center space-x-2 focus-visible:ring-2 focus-visible:ring-teal-500 outline-none rounded-lg" aria-label="Copy email to clipboard">
                    <Mail size={26} />
                    <div aria-live="polite">
                      {copied && <span className="text-sm font-bold text-emerald-600">Email Copied!</span>}
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative order-first md:order-last">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-300 rounded-full blur-3xl opacity-20 transform -rotate-12 translate-x-10"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-10 space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-700">
                      <ShieldCheck className="text-emerald-500" size={32} />
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase font-black">Secure Healthcare QA</div>
                        <div className="text-xs font-bold text-teal-600">HIPAA COMPLIANT</div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {[
                        { icon: <Rocket size={18} />, label: 'Focus Area', val: 'Agentic AI Testing' },
                        { icon: <Star size={18} />, label: 'Leadership', val: 'QA Center of Excellence' },
                        { icon: <CheckCircle size={18} />, label: 'Success Rate', val: '100% On-Time Delivery' },
                      ].map(({ icon, label, val }) => (
                        <div key={label} className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600">{icon}</div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase font-bold tracking-tight">{label}</p>
                            <p className="font-bold text-slate-800 dark:text-slate-100">{val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">About Me</h2>
            <p className="text-teal-600 font-bold mb-12 text-lg">Global Healthcare QA Leader | 14+ years in AI/ML & Compliance | Ex-Accenture, Kaiser, Infosys</p>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6 flex items-center gap-2">
                    <Rocket size={24} /> My Mission
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
                    My goal is to transition Quality Assurance from a procedural step into a strategic asset. In healthcare, this shifts the focus from simple software reliability to ensuring every digital interaction is safe, accurate, and seamless.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    I believe quality is a personal responsibility across the entire team. I specialize in AI-Augmented QA, using Agentic AI to identify risks before they reach clinical settings.
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-6 flex items-center gap-2">
                    <MapPin size={24} className="text-emerald-500" /> The Journey
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
                    I have managed global testing operations at <strong>Accenture</strong> and developed high-precision automation at <strong>Prime Therapeutics</strong>, working closely with clinicians, data scientists, and engineering teams.
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-semibold text-teal-700 dark:text-teal-400">
                    Today, I lead QA transformations that integrate HIPAA compliance with advanced AI. I am dedicated to mentoring engineers to advocate for the patients who rely on the software we build.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Zap size={20} className="text-emerald-300" /> Core Philosophy
                  </h3>
                  <blockquote className="text-lg font-medium leading-relaxed mb-6">
                    "Quality isn't just a checkbox in healthcare; it's a mission to ensure patient safety and trust."
                  </blockquote>
                  <div className="pt-6 border-t border-teal-500/30">
                    <p className="text-sm font-bold">Darshil Shah</p>
                    <p className="text-xs text-teal-200 uppercase tracking-widest">US Citizen · Dallas-Fort Worth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12">Professional Experience</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 before:to-transparent" role="list">
              {[
                {
                  role: "Information Technology Quality Assurance Analyst",
                  company: "Phynix Tech Services",
                  date: "Feb 2025 - Present · Dallas-Fort Worth Metroplex",
                  points: [
                    "Designing and executing comprehensive test plans, test cases, and test scenarios based on business and technical requirements.",
                    "Performing manual testing for web and mobile applications.",
                    "Identification, documentation, and tracking of defects using JIRA, ensuring timely resolution.",
                    "Conducting functional, regression, integration, system, and UAT testing.",
                    "Collaborating with developers, product managers, and business analysts in Agile/Scrum environments."
                  ]
                },
                {
                  role: "Global Healthcare QA Lead",
                  company: "Accenture (Kaiser Permanente)",
                  date: "Jan 2023 - Jan 2025 · Pleasanton, CA (Remote)",
                  points: [
                    "Led a 15+ onshore/offshore QA team across 15+ mobile releases, scaling app quality from 40% to 100% and increasing test coverage by 25%.",
                    "Saved 8+ hours per week in test planning and cut 'Get Care Now' wait times by 30% by integrating ChatGPT into QA workflows.",
                    "Delivered defect-free native iOS/Android releases by owning functional, regression, integration, UI, API, smoke, SIT, and E2E testing.",
                    "Reduced manual testing effort by 60% and boosted QA efficiency by 30% using Appium, Selenium, and Perfecto automation frameworks.",
                    "Improved defect resolution by 20% while keeping defect leakage under 5% via Jira, qTest, and HP ALM optimization."
                  ]
                },
                {
                  role: "Sr. QA Automation Engineer",
                  company: "Accenture (Kaiser Permanente)",
                  date: "Oct 2020 - Dec 2022 · Pleasanton, CA (Remote)",
                  points: [
                    "Worked on multiple high-profile healthcare tech initiatives, delivering impactful solutions affecting members across the USA.",
                    "Led comprehensive validation efforts, reducing defect leakage below 5% and improving product quality from 50% to 90%.",
                    "Documented and managed 300+ test cases spanning functional, regression, integration, API, UI, smoke, system, and automated testing.",
                    "Conducted end-to-end testing across web, mobile, and backend systems, including Java upgrade testing for Azure microservices."
                  ]
                },
                {
                  role: "Software Development Engineer in Test (SDET)",
                  company: "Infosys (Prime Therapeutics)",
                  date: "Oct 2019 - Apr 2020 · Bloomington, MN",
                  points: [
                    "Boosted testing efficiency by 40% by designing and implementing automation frameworks using Selenium, TestNG, and Hybrid POM.",
                    "Validated complex pharmacy claims data by cross-referencing JSON files with IBMi RX6 and performing SQL-driven analysis.",
                    "Developed and maintained scalable Page Object Model frameworks with Selenium WebDriver and Java.",
                    "Executed multi-phase functional, regression, integration, UAT, and end-to-end testing within Agile SDLC."
                  ]
                },
                {
                  role: "Platform Automation Engineer",
                  company: "TCS (Sony Pictures)",
                  date: "May 2019 - Jul 2019 · Culver City, CA",
                  points: [
                    "Translated business requirements into detailed test cases for the Sony Entertainment Web Platform.",
                    "Developed and automated test cases using Selenium2Library within Robot Framework (Python-based).",
                    "Automated key ServiceNow modules including Demand and Incident management.",
                    "Managed defect tracking and reporting through Atlassian Jira."
                  ]
                },
                {
                  role: "Quality Assurance Automation Engineer",
                  company: "Freelance",
                  date: "May 2017 - Mar 2019 · Irving, TX",
                  points: [
                    "Created detailed test cases by understanding business flow and user requirements using Jira.",
                    "Developed automation test suites using Selenium WebDriver, TestNG, and Maven.",
                    "Worked on distributed test automation execution as part of continuous integration using Jenkins.",
                    "Developed SQL queries to test backend processes during end-to-end testing."
                  ]
                },
                {
                  role: "QA Engineer",
                  company: "Eternal Web Pvt. Ltd.",
                  date: "Dec 2011 - Mar 2017 · Ahmedabad, India",
                  points: [
                    "Developed and executed detailed test cases in Jira, ensuring full requirements traceability.",
                    "Conducted thorough functional, exploratory, smoke, and regression testing.",
                    "Performed rigorous System Integration Testing (SIT) to validate seamless data flow.",
                    "Validated data accuracy and integrity by executing SQL (MySQL) queries."
                  ]
                }
              ].map((role, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group" role="listitem">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-200 dark:border-teal-800 bg-white dark:bg-slate-800 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-teal-600">
                    <Briefcase size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white dark:bg-slate-800 p-6 rounded-2xl border border-teal-100 dark:border-slate-700 shadow-sm transition hover:shadow-md hover:border-teal-300">
                    <div className="flex flex-col mb-4">
                      <h3 className="font-black text-slate-900 dark:text-slate-100 leading-tight">{role.role}</h3>
                      <p className="text-teal-600 text-sm font-black uppercase tracking-wider mt-1">{role.company}</p>
                      <time className="text-[10px] text-slate-400 font-bold mt-1">{role.date}</time>
                    </div>
                    <ul className="space-y-2">
                      {role.points.map((p, pi) => (
                        <li key={pi} className="flex items-start text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          <CheckCircle size={12} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "🏥",
                  title: "Kaiser Permanente Mobile",
                  company: "Accenture | QA Lead",
                  description: "End-to-end quality leadership for 11M+ members. Scaled coverage 40%→100% and reduced manual ops by 60%.",
                  impact: "40% Cost Reduction | ADA Compliant"
                },
                {
                  icon: "💊",
                  title: "Prime Therapeutics Claims",
                  company: "Infosys | SDET",
                  description: "Transformation of claim validation systems. Java/SQL framework saving 40s per claim validation cycle.",
                  impact: "40% Efficiency Boost | Backend focus"
                },
                {
                  icon: "🎬",
                  title: "Sony Entertainment Hub",
                  company: "TCS | Automation Eng",
                  description: "Robot Framework (Python) automation for global digital storefronts and ServiceNow workflows.",
                  impact: "50+ Global Test Cases | Python"
                }
              ].map((project, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-b-teal-600">
                  <div className="text-5xl mb-6">{project.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">{project.title}</h3>
                  <p className="text-xs text-teal-600 font-black uppercase tracking-widest mb-4">{project.company}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-black rounded-lg border border-emerald-100 uppercase tracking-tighter">
                    {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { cat: "Functional Testing & Strategy", skills: ["Web Functional Testing", "Mobile Functional Testing", "End-to-End Strategy", "Test Planning & Design", "SIT / UAT Leadership"], theme: "teal" },
                { cat: "QA Leadership & Mentorship", skills: ["Team Leadership (15+ SDETs)", "QA Best Practices", "Culture Building", "Risk Management", "Mentoring & Coaching"], theme: "emerald" },
                { cat: "Test Automation", skills: ["Selenium", "Appium", "TestNG", "Robot Framework", "Rest Assured", "Java", "Python", "SQL"], theme: "teal" },
                { cat: "Healthcare & Compliance", skills: ["HIPAA / FDA", "ISO Standards", "EHR / EMR", "Telehealth", "FHIR / HL7", "ADA Accessibility"], theme: "emerald" },
                { cat: "Tools", skills: ["JIRA", "Postman", "Jenkins", "Bitbucket", "Docker", "Kubernetes", "Azure", "TestRail", "qTest", "Perfecto"], theme: "sky" },
                { cat: "AI & Modern Tech", skills: ["Agentic AI", "LLMs (GPT-4 / Claude)", "Prompt Engineering", "MLOps", "AWS / Cloud", "Flutter"], theme: "indigo" }
              ].map((group, idx) => {
                const colors = {
                  teal: 'border-teal-100 dark:border-teal-900 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
                  emerald: 'border-emerald-100 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
                  sky: 'border-sky-100 dark:border-sky-900 bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300',
                  indigo: 'border-indigo-100 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300',
                };
                const dotColors = { teal: 'bg-teal-500', emerald: 'bg-emerald-500', sky: 'bg-sky-500', indigo: 'bg-indigo-500' };
                return (
                  <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                    <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${dotColors[group.theme]}`}></span>{group.cat}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className={`px-3 py-1.5 rounded-lg text-[11px] font-bold border shadow-sm ${colors[group.theme]}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 rounded-2xl p-10 text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4 flex items-center space-x-3">
                <FileText size={32} />
                <span>Interactive Portfolio PDF</span>
              </h3>
              <p className="mb-8 text-teal-50 text-lg max-w-2xl font-medium">Download the full 6-page professional document featuring technical deep-dives into healthcare compliance and AI agent testing strategies.</p>
              <a href="Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="inline-flex items-center space-x-3 bg-white text-teal-700 hover:bg-emerald-50 px-10 py-5 rounded-2xl font-black transition transform hover:scale-105 shadow-xl">
                <Download size={24} />
                <span>Download Document</span>
              </a>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12">Academic Background</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                { deg: "Masters' in Business Administration, Information Technology", school: "Sikkim Manipal University - Distance Education", span: "March 2013 - March 2015" },
                { deg: "Bachelor of Engineering - BE, Information Technology", school: "Sardar Patel University (SPU), Vallabh Vidyanagar", span: "August 2007 - August 2011" }
              ].map((edu, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 p-8 flex items-start space-x-6 shadow-sm hover:shadow-md transition">
                  <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-200">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-2">{edu.deg}</h3>
                    <p className="text-teal-600 font-black uppercase tracking-tighter text-sm mb-1">{edu.school}</p>
                    <p className="text-slate-400 text-xs font-bold">{edu.span}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                  <Globe size={24} className="text-teal-600" /> Languages
                </h3>
                <div className="space-y-4">
                  {["English", "Hindi", "Gujarati"].map((lang) => (
                    <div key={lang} className="bg-white dark:bg-slate-800 rounded-xl border border-teal-50 dark:border-slate-700 px-6 py-4 flex items-center justify-between border-l-4 border-l-emerald-500 shadow-sm">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{lang}</span>
                      <span className="text-[10px] bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded font-black uppercase">Full Professional</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-teal-100 dark:border-slate-700 p-8 border-b-4 border-b-emerald-500 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                  <Award size={24} className="text-teal-600" /> Excellence Recognition
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100 text-lg">3 Years of Service Award</h4>
                    <p className="text-teal-600 font-bold text-sm mb-2">Accenture</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">Recognized for exceptional leadership and impact in delivering complex Healthcare QA solutions for global clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Certifications</h2>
                <p className="text-slate-500 font-medium">Professional growth & technical specialization (2025–2026)</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-medium">
                <Bookmark size={14} className="text-teal-600" /> 15 Active Credentials
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  cat: "AI & Intelligent Agents", icon: <Brain size={24} className="text-indigo-600" />, color: "indigo",
                  certs: [
                    { title: "Agent Skills with Anthropic", body: "March 2026", icon: <Rocket size={20} /> },
                    { title: "Claude Code in Action", body: "DeepLearning.AI · 2026", icon: <Code2 size={20} /> },
                    { title: "Introduction to MCP", body: "Anthropic · 2025", icon: <Zap size={20} /> },
                    { title: "AI Agent Architect", body: "IBM · 2025", icon: <Search size={20} /> },
                    { title: "AI Fluency Framework", body: "Anthropic · 2025", icon: <ShieldCheck size={20} /> },
                    { title: "Generative AI in Action", body: "IBM · 2025", icon: <Star size={20} /> },
                    { title: "Intro to Generative AI", body: "Google · 2025", icon: <Rocket size={20} /> }
                  ]
                },
                {
                  cat: "Cloud & Modern Tech", icon: <Cloud size={24} className="text-sky-600" />, color: "sky",
                  certs: [
                    { title: "AWS Cloud Practitioner", body: "AWS · 2025", icon: <Cloud size={20} /> },
                    { title: "Copilot Foundations", body: "Microsoft · 2025", icon: <BookOpen size={20} /> },
                    { title: "MLOps for Generative AI", body: "Google · 2025", icon: <Globe size={20} /> },
                    { title: "Prompt Engineering", body: "Coursera · 2025", icon: <Code2 size={20} /> },
                    { title: "Foundations of Prompt Eng.", body: "AWS · 2025", icon: <Wrench size={20} /> }
                  ]
                },
                {
                  cat: "Agile & Leadership", icon: <Users size={24} className="text-emerald-600" />, color: "emerald",
                  certs: [
                    { title: "Registered Scrum Basics™", body: "Scrum Inc. · 2025", icon: <CheckCircle size={20} /> },
                    { title: "GenAI for Project Managers", body: "PMI · 2025", icon: <Briefcase size={20} /> },
                    { title: "Treasure Hunt for AI Skills", body: "LinkedIn · 2025", icon: <Search size={20} /> }
                  ]
                }
              ].map((group, i) => (
                <div key={i} className="space-y-6">
                  <h3 className={`text-xl font-black flex items-center gap-3 mb-6 text-slate-900 dark:text-slate-100`}>
                    {group.icon} {group.cat}
                  </h3>
                  <div className="space-y-4">
                    {group.certs.map((cert, j) => (
                      <div key={j} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 flex items-center space-x-4 shadow-sm hover:shadow-md transition group">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm
                          ${group.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' :
                            group.color === 'sky' ? 'bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400' :
                            'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}`}>
                          {cert.icon}
                        </div>
                        <div>
                          <h4 className="font-black text-slate-800 dark:text-slate-100 text-xs leading-tight mb-1">{cert.title}</h4>
                          <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider">{cert.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="https://www.linkedin.com/in/darshil-qa-lead/details/certifications/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white dark:bg-slate-800 border-2 border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-sm">
                <Linkedin size={20} />
                <span>View All 130+ Certifications on LinkedIn</span>
              </a>
            </div>
          </div>
        )}

        {/* Recommendations Section */}
        {activeSection === 'recommendations' && (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Colleague Recommendations</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12 text-lg">What people I've worked with say about my impact</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Diana Abdullaeva", title: "Software QA Engineer", initial: "DA", color: "bg-teal-600",
                  quote: "Working with Darshil on a cross-company project was an absolute pleasure... What stood out most was his deep understanding of automation frameworks and his ability to break down complex testing challenges into structured, maintainable solutions." },
                { name: "Prem Nair, PMP", title: "Senior Leader", initial: "PN", color: "bg-emerald-600",
                  quote: "Darshil is an amazing QA lead Engineer. His strategic approach to QA, proactive risk management and leadership in aligning QA goals with program objectives consistently delivered results." },
                { name: "Karam Bhangu", title: "Scrum Master", initial: "KB", color: "bg-sky-600",
                  quote: "Darshil played an instrumental role in testing deliverables... recognized in our team by our end client for his technical and leadership qualities. Our product quality also increased due to his efforts." },
                { name: "M Beveridge", title: "Scrum Master at Kaiser Permanente", initial: "MB", color: "bg-indigo-600",
                  quote: "We are exceedingly pleased with Darshil's outstanding performance in leading the Triage Heroes team... a dependable and diligent QA lead engineer with a positive and productive attitude." },
                { name: "Troy Kramer", title: "QA Lead / Product Owner", initial: "TK", color: "bg-teal-800",
                  quote: "Darshil has exceptional attention to detail, which was evident in his ability to identify issues, document findings clearly, and collaborate effectively with the team." }
              ].map((rec, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl border border-teal-100 dark:border-slate-700 p-8 shadow-sm transition hover:shadow-md relative flex flex-col h-full">
                  <div className="text-7xl text-teal-50 dark:text-slate-700/50 absolute top-2 left-6 font-serif select-none">"</div>
                  <div className="relative z-10 flex flex-col h-full justify-between flex-grow">
                    <p className="text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed text-sm">"{rec.quote}"</p>
                    <div className="flex items-center space-x-4 border-t border-teal-50 dark:border-slate-700 pt-5 mt-auto">
                      <div className={`w-10 h-10 rounded-full ${rec.color} flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm`}>{rec.initial}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-none mb-1">{rec.name}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tight font-bold">{rec.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
                <span className="text-white font-black">DS</span>
              </div>
              <div>
                <span className="font-black text-slate-900 dark:text-slate-100 block leading-none">Darshil Shah</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Healthcare QA Architect</span>
              </div>
            </div>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest text-center">Global Excellence · Quality Driven · AI Centric</p>
            <p className="text-slate-400 text-xs font-bold">© 2026. v2026.3.17. US Citizen · Dallas-Fort Worth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
