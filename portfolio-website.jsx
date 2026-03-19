import React, { useState } from 'react';
import { 
  Download, Github, Linkedin, Mail, MapPin, FileText, 
  Award, Briefcase, Code2, Heart, Phone, GraduationCap, 
  Globe, Bookmark, CheckCircle, Search, Tools, Rocket, 
  ShieldCheck, Zap, Star, User, BookOpen, Brain, Cloud, Users
} from 'lucide-react';

export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

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
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <span className="font-bold text-lg text-slate-900">Darshil Shah</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); window.scrollTo(0, 0); }}
                className={`text-sm font-semibold transition ${
                  activeSection === item.id ? 'text-teal-600 font-bold' : 'text-slate-600 hover:text-teal-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                    Global Healthcare<br />QA Leader
                  </h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xl text-teal-600 font-semibold italic">AI-Driven Testing & Automation Engineer</p>
                    <span className="text-[10px] bg-teal-100 text-teal-700 font-bold px-2 py-1 rounded border border-teal-200 uppercase tracking-widest shadow-sm">US Citizen</span>
                  </div>
                </div>
                
                <p class="text-xl text-slate-700 leading-relaxed max-w-2xl">
                  I lead high-impact QA programs for Fortune 500 healthcare organizations, combining AI-driven automation with deep regulatory expertise to ensure patient safety and business excellence.
                </p>

                {/* Core Focus Domains Snapshot */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="px-4 py-2 bg-white border border-teal-100 rounded-full text-xs font-bold text-teal-700 shadow-sm flex items-center gap-2">
                    <Heart size={14} className="text-emerald-500" /> Healthcare Tech
                  </span>
                  <span className="px-4 py-2 bg-white border border-teal-100 rounded-full text-xs font-bold text-teal-700 shadow-sm flex items-center gap-2">
                    <Rocket size={14} className="text-emerald-500" /> Agentic AI
                  </span>
                  <span className="px-4 py-2 bg-white border border-teal-100 rounded-full text-xs font-bold text-teal-700 shadow-sm flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-500" /> Cloud QA Ops
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">40%</div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Cost Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">30%</div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Wait Times</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-600">15+</div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Teams Led</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition transform hover:scale-105 shadow-lg shadow-emerald-200">
                    <Download size={20} />
                    <span>Download Portfolio PDF</span>
                  </a>
                  <button onClick={() => setActiveSection('contact')} className="flex items-center justify-center space-x-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold transition active:scale-95">
                    <Mail size={20} />
                    <span>Get In Touch</span>
                  </button>
                </div>

                <div className="flex items-center space-x-6 pt-8">
                  <a href="https://linkedin.com/in/darshil-qa-lead" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600 transition p-2 hover:bg-white rounded-lg border border-transparent hover:border-teal-100 shadow-none hover:shadow-sm">
                    <Linkedin size={26} />
                  </a>
                  <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600 transition p-2 hover:bg-white rounded-lg border border-transparent hover:border-teal-100 shadow-none hover:shadow-sm">
                    <Github size={26} />
                  </a>
                  <button onClick={copyEmail} className="text-slate-500 hover:text-teal-600 transition flex items-center space-x-2 p-2 hover:bg-white rounded-lg border border-transparent hover:border-teal-100 shadow-none hover:shadow-sm">
                    <Mail size={26} />
                    {copied && <span className="text-sm font-bold text-emerald-600 transition-all">Email Copied!</span>}
                  </button>
                </div>
              </div>

              <div className="relative order-first md:order-last">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-300 rounded-full blur-3xl opacity-20 transform -rotate-12 translate-x-10"></div>
                <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-1 shadow-2xl overflow-hidden group">
                  <div className="bg-white rounded-2xl p-10 space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                       <ShieldCheck className="text-emerald-500" size={32} />
                       <div className="text-right">
                         <div className="text-[10px] text-slate-400 uppercase font-black">Secure Healthcare QA</div>
                         <div className="text-xs font-bold text-teal-600">HIPAA COMPLIANT</div>
                       </div>
                    </div>
                    <div className="space-y-5">
                      <div className="flex items-center space-x-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover/item:bg-teal-100 transition"><Rocket size={18} /></div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-tight">Focus Area</p>
                          <p className="font-bold text-slate-800">Agentic AI Testing</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover/item:bg-teal-100 transition"><Star size={18} /></div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-tight">Leadership</p>
                          <p className="font-bold text-slate-800">QA Center of Excellence</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 group/item">
                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover/item:bg-teal-100 transition"><CheckCircle size={18} /></div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold tracking-tight">Success Rate</p>
                          <p className="font-bold text-slate-800">100% On-Time Delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-teal-600 font-bold mb-12 text-lg">Global Healthcare QA Leader | 12+ yrs in AI/ML & Compliance | Ex-Accenture, Kaiser, Infosys</p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                    <Rocket size={24} /> My Mission
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-4">
                    My goal is to transition Quality Assurance from a procedural step into a strategic asset. In healthcare, this shifts the focus from simple software reliability to ensuring every digital interaction is safe, accurate, and seamless.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    I believe quality is a personal responsibility across the entire team. I specialize in AI-Augmented QA, using Agentic AI to identify risks before they reach clinical settings. I focus on building a culture where technical excellence directly supports the patient experience.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-teal-700 mb-6 flex items-center gap-2">
                    <MapPin size={24} className="text-emerald-500" /> The Journey
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg mb-4">
                    I have managed global testing operations at <strong>Accenture</strong> and developed high-precision automation at <strong>Prime Therapeutics</strong>, working closely with clinicians, data scientists, and engineering teams.
                  </p>
                  <p className="text-slate-700 leading-relaxed font-semibold text-teal-700">
                    Today, I lead QA transformations that integrate HIPAA compliance with advanced AI. I am dedicated to mentoring engineers to advocate for the patients who rely on the software we build.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Zap size={20} className="text-emerald-300" /> Core Philosophy
                  </h3>
                  <p className="text-teal-50 italic mb-6 leading-relaxed uppercase text-[10px] tracking-widest font-black opacity-60">Mission Focused</p>
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
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in slide-in-from-right-5 fade-in duration-500">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Professional Experience</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-teal-200 before:to-transparent">
              {[
                {
                  role: "Information Technology QA Lead",
                  company: "Phynix Tech Services",
                  date: "Feb 2025 - Present · Dallas, TX",
                  points: [
                    "Drive enterprise-wide QA transformation for digital health solutions, ensuring 100% compliance with HIPAA and FDA standards.",
                    "Optimize automation workflows using Agentic AI, resulting in an estimated 500+ manual hours saved annually.",
                    "Lead cross-functional teams to deliver zero-defect releases for high-stakes healthcare deployments."
                  ]
                },
                {
                  role: "Global Healthcare QA Lead - Kaiser Permanente",
                  company: "Accenture",
                  date: "Jan 2023 - Jan 2025 · Atlanta, GA",
                  points: [
                    "Spearheaded global quality transformations for 15+ high-priority mobile releases, boosting product excellence from 40% to 100% for 3.5M+ active members.",
                    "Achieved a 40% cost reduction in testing overhead by architecting robust test data management protocols and environment stability frameworks.",
                    "Cultivated a \"Quality First\" culture, mentoring a global team of 20+ SDETs to ensure zero-defect production deployments.",
                    "Boosted iOS/Android accessibility compliance to 100%, securing ADA certification for patient-facing healthcare platforms."
                  ]
                },
                {
                  role: "Sr. QA Automation Engineer - Kaiser Permanente",
                  company: "Accenture",
                  date: "Oct 2020 - Dec 2022 · Atlanta, GA",
                  points: [
                    "Architected bespoke Selenium/Appium frameworks that slashed manual regression testing effort by 60% and expedited CI/CD delivery cycles.",
                    "Pioneered API automation for member services, achieving 95% data validation accuracy and preventing critical downstream errors in clinical data flow.",
                    "Managed the full defect lifecycle in a TDD environment, fostering a \"Fail Fast, Fix Faster\" mentality that kept production defect rates below 5%."
                  ]
                },
                {
                  role: "Pharmacy QA Excellence - Prime Therapeutics",
                  company: "Infosys",
                  date: "Oct 2019 - Apr 2020 · Bloomington, MN",
                  points: [
                    "Architected high-precision regression suites for pharmacy claims processing, achieving 40% efficiency gains and ensuring 100% precision for patient-critical data.",
                    "Bridged the gap between clinicians, Product Owners, and engineers to align complex PBM business logic with a rigorous QA strategy.",
                    "Enhanced Java/Selenium frameworks with complex SQL validation, ensuring financial and clinical data integrity for large-scale pharmacy backend systems."
                  ]
                },
                {
                   role: "Platform Automation Engineer - Sony Pictures Entertainment",
                   company: "Tata Consultancy Services (TCS)",
                   date: "May 2019 - Jul 2019 · Culver City, CA",
                   points: [
                     "Automated 50+ test cases using Robot Framework (Python) for Sony's global web platform.",
                     "Streamlined ServiceNow instance management using automated incident/demand modules."
                   ]
                },
                {
                   role: "QA Automation Engineer (Freelance)",
                   company: "Independent Contractor",
                   date: "May 2017 - Mar 2019 · Irving, TX",
                   points: [
                     "Delivered custom automation suites for diverse clients using Selenium, TestNG, and Java.",
                     "Configured CI/CD pipelines with Jenkins and managed distributed test grids."
                   ]
                },
                {
                   role: "QA Engineer (AWS Cloud & Odoo ERP)",
                   company: "Eternal Web Pvt. Ltd.",
                   date: "Dec 2011 - Mar 2017 · Ahmedabad, India",
                   points: [
                     "Full-cycle QA for ERP solutions, covering functional, smoke, and regression testing.",
                     "Specialized in Odoo platform testing and AWS-hosted web application validation."
                   ]
                }
              ].map((role, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                  {/* Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-200 bg-white group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Briefcase size={16} />
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl border border-teal-100 shadow-sm transition hover:shadow-md hover:border-teal-300">
                    <div className="flex flex-col mb-4">
                      <h3 className="font-black text-slate-900 leading-tight">{role.role}</h3>
                      <p className="text-teal-600 text-sm font-black uppercase tracking-wider mt-1">{role.company}</p>
                      <time className="text-[10px] text-slate-400 font-bold mt-1">{role.date}</time>
                    </div>
                    <ul className="space-y-2">
                      {role.points.map((p, pi) => (
                        <li key={pi} className="flex items-start text-xs text-slate-600 leading-relaxed">
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
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={idx} className="bg-white rounded-2xl border border-teal-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-b-teal-600">
                  <div className="text-5xl mb-6">{project.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-xs text-teal-600 font-black uppercase tracking-widest mb-4">{project.company}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-lg border border-emerald-100 uppercase tracking-tighter">
                    {project.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  cat: "Functional Testing & Strategy", 
                  skills: ["Web Functional Testing", "Mobile Functional Testing", "End-to-End Strategy", "Test Planning & Design", "User Centric Validation", "SIT / UAT Leadership"],
                  theme: "teal"
                },
                { 
                  cat: "QA Leadership & Mentorship", 
                  skills: ["Team Leadership (15+ SDETs)", "QA Best Practices", "Culture Building", "Risk Management", "Resource Planning", "Mentoring & Coaching"],
                  theme: "emerald"
                },
                { 
                  cat: "Test Automation", 
                  skills: ["Selenium", "Appium", "TestNG", "Robot Framework", "Rest Assured", "SoapUI", "Java", "Python", "SQL"],
                  theme: "teal"
                },
                { 
                  cat: "Healthcare & Compliance", 
                  skills: ["HIPAA / FDA", "ISO Standards", "EHR / EMR", "Telehealth", "FHIR / HL7", "ADA Accessibility"],
                  theme: "emerald"
                },
                { 
                  cat: "Tools", 
                  skills: ["JIRA", "Postman", "Jenkins", "Bitbucket", "Docker", "Kubernetes", "Azure", "TestRail", "qTest", "Perfecto"],
                  theme: "sky"
                },
                { 
                  cat: "AI & Modern Tech", 
                  skills: ["Agentic AI", "LLMs (GPT-4 / Claude)", "Prompt Engineering", "MLOps", "AWS / Cloud", "Flutter"],
                  theme: "indigo"
                }
              ].map((group, idx) => (
                <div key={idx} className={`bg-white rounded-2xl border ${group.theme === 'emerald' ? 'border-emerald-100 hover:border-emerald-400' : group.theme === 'sky' ? 'border-sky-100 hover:border-sky-400' : group.theme === 'indigo' ? 'border-indigo-100 hover:border-indigo-400' : 'border-teal-100 hover:border-teal-400'} p-6 shadow-sm transition-colors`}>
                  <h3 className="text-lg font-black text-slate-900 mb-4 pb-2 border-b border-teal-50 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${group.theme === 'emerald' ? 'bg-emerald-500' : group.theme === 'sky' ? 'bg-sky-500' : group.theme === 'indigo' ? 'bg-indigo-500' : 'bg-teal-500'}`}></span>{group.cat}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sidx) => (
                      <span key={sidx} className={`${group.theme === 'emerald' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : group.theme === 'sky' ? 'bg-sky-50 text-sky-700 border-sky-100' : group.theme === 'indigo' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' : 'bg-teal-50 text-teal-700 border-teal-100'} px-3 py-1.5 rounded-lg text-[11px] font-bold border shadow-sm`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-teal-600 via-teal-700 to-emerald-600 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
               <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 flex items-center space-x-3">
                  <FileText size={32} strokeWidth={2.5} />
                  <span>Interactive Portfolio PDF</span>
                </h3>
                <p className="mb-8 text-teal-50 text-lg max-w-2xl font-medium">Download the full 6-page professional document featuring technical deep-dives into healthcare compliance and AI agent testing strategies.</p>
                <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="inline-flex items-center space-x-3 bg-white text-teal-700 hover:bg-emerald-50 px-10 py-5 rounded-2xl font-black transition transform hover:scale-105 shadow-xl">
                  <Download size={24} />
                  <span>Download Document</span>
                </a>
               </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in slide-in-from-left-5 fade-in duration-500">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Academic Background</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  deg: "MBA – Information Technology",
                  school: "Sikkim Manipal University",
                  span: "2013 – 2015",
                  sub: "Distance Education Program"
                },
                {
                  deg: "BE – Information Technology",
                  school: "Sardar Patel University",
                  span: "2007 – 2011",
                  sub: "Gujarat, India"
                }
              ].map((edu, i) => (
                <div key={i} className="bg-white rounded-2xl border border-teal-100 p-8 flex items-start space-x-6 shadow-sm hover:shadow-md transition">
                  <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-200">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{edu.deg}</h3>
                    <p className="text-teal-600 font-black uppercase tracking-tighter text-sm mb-1">{edu.school}</p>
                    <p className="text-slate-400 text-xs font-bold">{edu.span} · {edu.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Globe size={24} className="text-teal-600" /> Languages
                </h3>
                <div className="space-y-4">
                  {["English", "Hindi", "Gujarati"].map((lang) => (
                    <div key={lang} className="bg-white rounded-xl border border-teal-50 px-6 py-4 flex items-center justify-between border-l-4 border-l-emerald-500 shadow-sm">
                      <span className="font-bold text-slate-700">{lang}</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-1 rounded font-black uppercase">Full Professional</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-teal-100 p-8 border-b-4 border-b-emerald-500 shadow-sm">
                 <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Award size={24} className="text-teal-600" /> Excellence Recognition
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0"><Star size={24} fill="currentColor" /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">3 Years of Service Award</h4>
                    <p className="text-teal-600 font-bold text-sm mb-2">Accenture</p>
                    <p className="text-slate-500 text-sm italic leading-relaxed">Recognized for exceptional leadership and impact in delivering complex Healthcare QA solutions for global clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Certifications</h2>
                <p className="text-slate-500 font-medium">Professional growth & technical specialization (2025–2026)</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200 text-xs font-black uppercase tracking-widest shadow-sm">
                <Bookmark size={14} /> 15 Active Credentials
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  cat: "AI & Intelligent Agents",
                  icon: <Brain size={24} className="text-indigo-600" />,
                  color: "indigo",
                  certs: [
                    { title: "Agent Skills with Anthropic", body: "March 2026", icon: <Rocket size={20} /> },
                    { title: "Claude Code in Action", body: "DeepLearning.AI · 2026", icon: <Code2 size={20} /> },
                    { title: "Introduction to MCP", body: "Anthropic · 2025", icon: <Zap size={20} /> },
                    { title: "AI Agent Architect", body: "IBM · 2025", icon: <Search size={20} /> },
                    { title: "AI Fluency Framework", body: "Anthropic · 2025", icon: <ShieldCheck size={20} /> },
                    { title: "Intro to Generative AI", body: "Google · 2025", icon: <Rocket size={20} /> },
                    { title: "Generative AI in Action", body: "IBM · 2025", icon: <Star size={20} /> }
                  ]
                },
                {
                  cat: "Cloud & Modern Tech",
                  icon: <Cloud size={24} className="text-sky-600" />,
                  color: "sky",
                  certs: [
                    { title: "AWS Cloud Practitioner", body: "AWS · 2025", icon: <CloudIcon /> },
                    { title: "Copilot Foundations", body: "Microsoft · 2025", icon: <BookOpen size={20} /> },
                    { title: "MLOps for Generative AI", body: "Google · 2025", icon: <Globe size={20} /> },
                    { title: "Prompt Engineering", body: "Coursera · 2025", icon: <Star size={20} /> },
                    { title: "Foundations of Prompt Eng.", body: "AWS · 2025", icon: <Tools size={20} /> }
                  ]
                },
                {
                  cat: "Agile & Leadership",
                  icon: <Users size={24} className="text-emerald-600" />,
                  color: "emerald",
                  certs: [
                    { title: "Registered Scrum Basics™", body: "Scrum Inc. · 2025", icon: <CheckCircle size={20} /> },
                    { title: "GenAI for Project Managers", body: "PMI · 2025", icon: <Briefcase size={20} /> },
                    { title: "The Treasure Hunt for AI Skills", body: "LinkedIn Learning", icon: <Search size={20} /> }
                  ]
                }
              ].map((group, i) => (
                <div key={i} className="space-y-6">
                  <h3 className={`text-xl font-black text-${group.color}-900 flex items-center gap-3 mb-6`}>
                    {group.icon} {group.cat}
                  </h3>
                  <div className="space-y-4">
                    {group.certs.map((cert, j) => (
                      <div key={j} className={`bg-white rounded-2xl border border-${group.color}-100 p-5 flex items-center space-x-4 shadow-sm hover:shadow-md transition group`}>
                        <div className={`w-10 h-10 rounded-xl bg-${group.color}-50 text-${group.color}-600 flex items-center justify-center flex-shrink-0 group-hover:bg-${group.color}-600 group-hover:text-white transition-colors duration-300 shadow-sm`}>{cert.icon}</div>
                        <div>
                          <h4 className="font-black text-slate-800 text-xs leading-tight mb-1">{cert.title}</h4>
                          <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider">{cert.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2 space-y-12">
                <div>
                  <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">Let's build safer healthcare.</h2>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">Available for strategic QA leadership roles, AI transformation consulting, and healthcare tech advisory.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: <Mail className="text-teal-600" />, label: "Email", val: "darshils99@gmail.com", action: copyEmail, clickLabel: copied ? "Copied!" : "Click to copy" },
                    { icon: <Phone className="text-teal-600" />, label: "Direct Mobile", val: "+1 (469) 987-6574" },
                    { icon: <MapPin className="text-teal-600" />, label: "HQ / Home", val: "Dallas-Fort Worth Metroplex" }
                  ].map((item, id) => (
                    <div key={id} onClick={item.action} className={`bg-white rounded-2xl border border-teal-100 p-6 flex items-center gap-6 shadow-sm hover:border-teal-400 transition cursor-pointer group ${item.action ? 'relative' : ''}`}>
                      <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center shadow-inner group-hover:bg-teal-100 transition-colors">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none mb-2">{item.label}</p>
                        <p className="text-lg font-black text-slate-800 break-words">{item.val}</p>
                      </div>
                      {item.clickLabel && (
                        <span className="absolute top-4 right-4 text-[9px] font-black uppercase bg-emerald-50 text-emerald-700 px-2 py-1 rounded shadow-sm border border-emerald-100">{item.clickLabel}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-200">
                   <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-6">Digital Reach</p>
                   <div className="flex gap-4">
                     <a href="https://linkedin.com/in/darshil-qa-lead" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border border-teal-100 px-6 py-4 rounded-2xl font-black text-slate-700 hover:text-teal-600 hover:border-teal-400 shadow-sm transition">
                       <Linkedin size={24} /> <span>LinkedIn Profile</span>
                     </a>
                     <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border border-teal-100 px-6 py-4 rounded-2xl font-black text-slate-700 hover:text-teal-600 hover:border-teal-400 shadow-sm transition">
                       <Github size={24} /> <span>GitHub</span>
                     </a>
                   </div>
                </div>
              </div>

              <div className="md:w-1/2">
                 <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-between group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 space-y-8">
                       <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-white shadow-lg transform rotate-6 animate-pulse transition hover:rotate-0 duration-500"><Download size={40} /></div>
                       <h3 className="text-4xl font-black leading-tight tracking-tighter">Download the Full 6-Page Portfolio.</h3>
                       <p className="text-teal-50 text-xl font-light leading-relaxed">Includes deep-dive case studies on Kaiser Permanente and Prime Therapeutics, full technical stack, and QA frameworks overview.</p>
                       <ul className="space-y-4">
                         {["Case Studies", "Verification Methods", "Healthcare Strategy", "AI Integration"].map((u) => (
                           <li key={u} className="flex items-center gap-3 font-bold text-teal-100 uppercase tracking-widest text-xs">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>{u}
                           </li>
                         ))}
                       </ul>
                    </div>
                    <div className="relative z-10 pt-12">
                      <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="flex items-center justify-center gap-3 bg-white text-teal-700 px-8 py-6 rounded-[1.5rem] font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full">
                        <Download size={28} /> DOWNLOAD PDF
                      </a>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
                <span className="text-white font-black">DS</span>
              </div>
              <div>
                <span className="font-black text-slate-900 block leading-none">Darshil Shah</span>
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

function CloudIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-3.9-4.5-1.1-4.1-5-7-9.1-7-3.6 0-6.8 2.2-8 5.6-2.1.2-3.8 2.3-3.8 4.6C1 17 3 19 5.5 19" />
    </svg>
  );
}
