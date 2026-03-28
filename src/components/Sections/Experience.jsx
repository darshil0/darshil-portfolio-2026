import React from 'react';

export default function Experience() {
  return (
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
  );
}
