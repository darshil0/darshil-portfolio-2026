import React from 'react';

const experiences = [
  {
    code: 'PHY', role: 'IT QA Analyst', company: 'Phynix Tech Services',
    date: 'Feb 2025 – Present', location: 'Dallas-Fort Worth Metroplex',
    bullets: [
      'Designing and executing comprehensive test plans, test cases, and test scenarios based on business and technical requirements.',
      'Performing manual testing for web and mobile applications.',
      'Identification, documentation, and tracking of defects using JIRA, ensuring timely resolution.',
      'Conducting functional, regression, integration, system, and UAT testing.',
      'Collaborating with developers, product managers, and business analysts in Agile/Scrum environments.',
      'Participating in sprint planning, daily stand-ups, and retrospective meetings.',
    ]
  },
  {
    code: 'ACC', role: 'Quality Assurance Test Lead', company: 'Accenture (Kaiser Permanente)',
    date: 'Jan 2023 – Jan 2025', location: 'Pleasanton, California',
    bullets: [
      'Led a 15+ onshore/offshore QA team across 15+ mobile releases, scaling app quality from 40% to 100% and increasing test coverage by 25% through standardized test strategies and KPI-driven release gates.',
      'Saved 8+ hours per week in test planning and cut "Get Care Now" wait times by 30% by integrating ChatGPT into QA workflows and validating critical care-journey paths end to end.',
      'Delivered defect-free native iOS/Android releases by owning functional, regression, integration, UI, API, smoke, SIT, and E2E testing as QA SME for cross-functional teams.',
      'Reduced manual testing effort by 60% and boosted QA efficiency by 30% by designing an Agile automation framework using Appium, Selenium, and Perfecto — earning Accenture\'s 3-Year Service Award.',
      'Improved defect resolution by 20% while keeping defect leakage under 5% by optimizing workflows in Jira, qTest, and HP ALM, leveraging ChatGPT and MS Copilot for test case generation.',
      'Reduced time-to-market by implementing shift-left testing and delivering executive-ready reports on progress, risks, and quality metrics.',
    ]
  },
  {
    code: 'ACC', role: 'Sr. QA Automation Engineer', company: 'Accenture (Kaiser Permanente)',
    date: 'Oct 2020 – Dec 2022', location: 'Pleasanton, California',
    bullets: [
      'Led comprehensive validation efforts, reducing defect leakage rates below 5% and improving product quality from 50% to 90%, earning recognition from the client.',
      'Documented and managed 300+ test cases spanning functional, regression, integration, API, UI, smoke, system, and automated testing scenarios.',
      'Conducted end-to-end testing across web, mobile, and backend systems including Java upgrade testing for Azure microservices deployed via Kubernetes.',
      'Implemented ADA accessibility compliance validation and cross-platform testing leveraging physical devices, simulators, and the Perfecto cloud platform.',
      'Enhanced Agile development processes by providing strategic QA guidance during Scrum ceremonies and fostering collaboration between development, business, and stakeholder teams.',
    ]
  },
  {
    code: 'INF', role: 'Software Development Engineer in Test', company: 'Infosys (Prime Therapeutics)',
    date: 'Oct 2019 – Apr 2020', location: 'Minneapolis, Minnesota',
    bullets: [
      'Boosted testing efficiency by 40% by designing and implementing robust automation frameworks using Selenium, TestNG, and Hybrid POM, enhancing regression test coverage and reliability.',
      'Validated complex pharmacy claims data by cross-referencing JSON files with IBMi RX6 and performing SQL-driven analysis, streamlining critical workflows.',
      'Developed and maintained scalable Page Object Model frameworks with Selenium WebDriver and Java, integrating with HP ALM for reliable regression testing.',
      'Executed multi-phase functional, regression, integration, UAT, and end-to-end testing within Agile SDLC.',
      'Managed test artifacts, defect tracking, and coordination through Jira and Bitbucket across cross-functional teams.',
    ]
  },
  {
    code: 'TCS', role: 'Platform Automation Engineer', company: 'Tata Consultancy Services (Sony Pictures)',
    date: 'May 2019 – Jul 2019', location: 'Culver City, California',
    bullets: [
      'Translated business requirements into detailed test cases for the Sony Entertainment Web Platform, ensuring comprehensive test coverage.',
      'Developed and automated robust test cases using Selenium2Library within Robot Framework (Python-based), increasing testing accuracy and efficiency.',
      'Automated key ServiceNow modules including Demand and Incident management, contributing to operational efficiency.',
      'Managed defect tracking and reporting through Atlassian Jira, maintaining clear communication on progress.',
    ]
  },
  {
    code: 'FRE', role: 'QA Automation Engineer', company: 'Freelance',
    date: 'May 2017 – Mar 2019', location: 'Irving, Texas',
    bullets: [
      'Created detailed test cases by understanding business flow and user requirements for system testing using Jira across multiple industries.',
      'Developed automation test suites and scripts using Selenium WebDriver, TestNG, and Maven.',
      'Contributed to building an automation framework using Java, Selenium WebDriver, and TestNG with Jenkins for continuous integration.',
      'Developed SQL queries to test backend processes during end-to-end testing.',
    ]
  },
  {
    code: 'ETE', role: 'QA Engineer', company: 'Eternal Web Pvt. Ltd.',
    date: 'Dec 2011 – Mar 2017', location: 'Ahmedabad, Gujarat, India',
    bullets: [
      'Developed and executed detailed test cases in Jira, ensuring full requirements traceability across functional, exploratory, regression, and system integration testing.',
      'Performed rigorous System Integration Testing (SIT) to validate seamless interaction and data flow between application components.',
      'Executed comprehensive cross-browser testing and validated data accuracy via SQL (MySQL) queries.',
      'Collaborated with development and product teams within Agile/Scrum environments, actively participating in sprints for timely feedback throughout the testing lifecycle.',
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience-section" className="py-24 bg-[#f8f9ff] dark:bg-[#0b111a] min-h-[600px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold font-headline mb-4 tracking-tight">Professional Journey</h2>
          <div className="w-20 h-2 bg-[#00685f] dark:bg-[#6bd8cb] rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium italic opacity-80">14+ years of high-impact testing leadership across healthcare, entertainment & pharma.</p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-emerald-900/5">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/3">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00685f] to-[#004e47] flex items-center justify-center text-white font-black text-sm shadow-xl shrink-0 group-hover:scale-110 transition-transform duration-500">{exp.code}</div>
                    <div>
                      <h3 className="text-2xl font-black font-headline tracking-tight text-slate-800 dark:text-white leading-tight mb-2">{exp.role}</h3>
                      <p className="text-[#00685f] dark:text-[#6bd8cb] font-black text-sm uppercase tracking-widest">{exp.company}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="inline-block px-4 py-2 bg-[#eef4ff] dark:bg-slate-800 text-[#00685f] dark:text-[#6bd8cb] text-[10px] font-black rounded-xl uppercase tracking-[0.2em] shadow-sm border border-[#00685f]/5">
                      {exp.date}
                    </div>
                    <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">{exp.location}</p>
                  </div>
                </div>
                
                <div className="lg:w-2/3 lg:border-l lg:border-slate-100 lg:dark:border-slate-800 lg:pl-10">
                  <ul className="grid gap-5">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed group/item transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00685f] dark:bg-[#6bd8cb] mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                        <span className="font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
