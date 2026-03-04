import { motion } from "motion/react";
import { EXPERIENCE, EDUCATION } from "../constants";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Career History</p>
          <h2>Professional Journey</h2>
          <p className="subtitle">
            14+ years across global healthcare, pharma, and entertainment — building quality at scale.
          </p>
        </div>

        <div className="relative pl-8 border-l-2 border-[var(--border-lt)]">
          {EXPERIENCE.map((job, idx) => (
            <motion.div
              key={job.company + job.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12 relative p-6 rounded-[var(--radius)] transition-[var(--transition)] hover:bg-[var(--surface)] hover:shadow-md hover:-translate-y-0.5 before:content-[''] before:absolute before:-left-[calc(2rem+7px)] before:top-1.5 before:w-3 before:h-3 before:bg-[var(--bg)] before:border-2 before:border-[var(--primary)] before:rounded-full"
            >
              <div className="mb-4">
                <h4 className="text-[1.2rem] text-[var(--text)] mb-1 font-bold">{job.title}</h4>
                <div className="flex flex-wrap items-center gap-3 text-[0.9rem] mb-4">
                  <span className="font-bold text-[var(--primary)]">{job.company}</span>
                  <span className="text-[var(--muted)]">{job.period}</span>
                  {job.current && <span className="badge">Current</span>}
                </div>
              </div>
              
              <ul className="list-disc ml-6 text-[var(--mid)] text-[0.95rem]">
                {job.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Sub-section */}
        <div className="mt-24">
          <div className="section-heading">
            <h2>Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="mb-6 p-6 border border-[var(--border)] rounded-[var(--radius-sm)] transition-[var(--transition)] hover:border-[var(--primary)] hover:bg-[var(--surface)]">
                <h3 className="font-bold">{edu.school}</h3>
                <p className="text-sm font-medium text-[var(--mid)] mb-2">{edu.degree}</p>
                <span className="pill">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
