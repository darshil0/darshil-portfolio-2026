import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, MapPin, FileText, Award, Briefcase, Code2, Heart } from 'lucide-react';

export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('darshils99@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <span className="font-bold text-lg text-slate-900">Darshil Shah</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setActiveSection('home')} className="text-slate-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => setActiveSection('projects')} className="text-slate-700 hover:text-blue-600 transition">Projects</button>
            <button onClick={() => setActiveSection('skills')} className="text-slate-700 hover:text-blue-600 transition">Skills</button>
            <button onClick={() => setActiveSection('contact')} className="text-slate-700 hover:text-blue-600 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Global Healthcare<br />QA Leader
                </h1>
                <p className="text-xl text-blue-600 font-semibold">AI-Driven Testing & Automation Engineer</p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                12+ years of proven expertise in building world-class quality assurance programs for Fortune 500 healthcare organizations. I combine technical excellence with data-driven leadership to deliver measurable business impact.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">40%</div>
                  <div className="text-sm text-slate-600">Cost Reduction</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">30%</div>
                  <div className="text-sm text-slate-600">Wait Time Improvement</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Teams Led</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                  <Download size={20} />
                  <span>Download Portfolio PDF</span>
                </a>
                <button onClick={() => setActiveSection('contact')} className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition">
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <a href="https://linkedin.com/in/darshil-qalead" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600 transition">
                  <Github size={24} />
                </a>
                <button onClick={copyEmail} className="text-slate-700 hover:text-blue-600 transition flex items-center space-x-2">
                  <Mail size={24} />
                  {copied && <span className="text-sm text-green-600">Copied!</span>}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8 space-y-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-blue-200 rounded-full w-32"></div>
                    <div className="h-3 bg-blue-100 rounded-full w-48"></div>
                    <div className="h-3 bg-blue-100 rounded-full w-40"></div>
                  </div>
                  <div className="pt-6 space-y-4">
                    <div className="flex items-center space-x-3 text-slate-700">
                      <Code2 size={20} className="text-blue-600" />
                      <span>Test Automation Frameworks</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-700">
                      <Award size={20} className="text-blue-600" />
                      <span>Healthcare QA Leadership</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-700">
                      <Briefcase size={20} className="text-blue-600" />
                      <span>AI-Driven Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "Kaiser Permanente Mobile App",
                company: "Accenture | Oct 2020 - Jan 2025",
                description: "Led QA for 15+ mobile releases, scaled test coverage 40%→100%, improved patient wait times by 30%, reduced manual testing 60%",
                impact: "40% cost reduction | 100% coverage | 15+ defect-free releases"
              },
              {
                icon: "💊",
                title: "Prime Therapeutics Claims",
                company: "Infosys | Oct 2019 - Apr 2020",
                description: "Designed Selenium/TestNG automation frameworks for pharmacy claims validation across complex backend systems",
                impact: "40% efficiency boost | Enhanced regression testing | SQL validation"
              },
              {
                icon: "🎬",
                title: "Sony Pictures Platform",
                company: "TCS | May 2019 - Jul 2019",
                description: "Automated 50+ test cases using Robot Framework, validated ServiceNow modules for Demand & Incident management",
                impact: "Streamlined automation | Operational efficiency | Python framework"
              }
            ].map((project, idx) => (
              <div key={idx} className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{project.company}</p>
                <p className="text-slate-700 mb-4">{project.description}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-blue-600">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Test Automation",
                skills: ["Selenium WebDriver", "Appium", "TestNG", "Robot Framework", "Cypress", "Page Object Model"]
              },
              {
                category: "Healthcare & Compliance",
                skills: ["HIPAA", "FDA Regulations", "EHR/EMR", "Telehealth", "FHIR/HL7", "ADA Accessibility"]
              },
              {
                category: "Tools & Platforms",
                skills: ["JIRA", "Postman", "HP ALM", "TestRail", "Jenkins", "Docker", "Kubernetes"]
              },
              {
                category: "AI & Modern Tech",
                skills: ["ChatGPT API", "Claude", "Prompt Engineering", "MLOps", "Flutter/Dart", "AWS"]
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sidx) => (
                    <span key={sidx} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <FileText size={28} />
              <span>Complete Portfolio Document</span>
            </h3>
            <p className="mb-6 text-blue-100">Download my comprehensive 6-page QA Engineering portfolio with detailed project case studies, technical stack, healthcare expertise, and AI/ML capabilities.</p>
            <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105">
              <Download size={20} />
              <span>Download Portfolio PDF</span>
            </a>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Email</p>
                      <button onClick={copyEmail} className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition">
                        darshils99@gmail.com {copied && <span className="text-sm text-green-600 ml-2">Copied!</span>}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Phone</p>
                      <p className="text-lg font-semibold text-slate-900">+1 (469) 987-6574</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Location</p>
                      <p className="text-lg font-semibold text-slate-900">Dallas-Fort Worth, Texas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-slate-600 mb-4">Follow me online:</p>
                  <div className="flex items-center space-x-4">
                    <a href="https://linkedin.com/in/darshil-qalead" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/darshil0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Download My Portfolio</h3>
              <p className="text-blue-100 leading-relaxed">
                Get a comprehensive overview of my QA engineering expertise, featured projects, technical stack, and healthcare domain knowledge.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>6-page professional document</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Detailed project case studies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Technical expertise & certifications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Healthcare & AI/ML specialization</span>
                </li>
              </ul>
              <a href="/Darshil_Shah_QA_Engineering_Portfolio.pdf" download className="inline-flex items-center justify-center w-full space-x-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 mt-6">
                <Download size={24} />
                <span>Download Portfolio PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="font-bold text-slate-900">Darshil Shah</span>
            </div>
            <p className="text-slate-600">Global Healthcare QA Leader | AI-Driven Testing Engineer</p>
            <p className="text-sm text-slate-500 mt-4 md:mt-0">© 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
