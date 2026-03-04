import { motion, AnimatePresence } from "motion/react";
import { Globe, User, Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { 
  SKILLS, 
  RECENT_CERTS, 
  CURRENT_FOCUS, 
  GENERAL_CERTS, 
  HONORS 
} from "../constants";

export const Skills = () => {
  const [certFilter, setCertFilter] = useState("all");

  const filteredCerts = certFilter === "all" 
    ? RECENT_CERTS 
    : RECENT_CERTS.filter(c => c.category === certFilter);

  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Technical Profile</p>
          <h2>AI Innovation & QA Tech Stack</h2>
          <p className="subtitle">
            Bridging enterprise healthcare QA, compliance, and frontier AI tools with agentic workflows.
          </p>
        </div>

        {/* Current Focus (2026) */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8">Current Focus (2026)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CURRENT_FOCUS.map((focus, idx) => (
              <motion.div 
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--surface)] p-6 rounded-[var(--radius)] border border-[var(--border)] transition-[var(--transition)] hover:border-[var(--primary)] hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-[var(--primary-pale)] text-[var(--primary)] rounded-[var(--radius-sm)] flex items-center justify-center mb-4">
                  {idx === 0 && <Globe size={20} />}
                  {idx === 1 && <User size={20} />}
                  {idx === 2 && <Award size={20} />}
                  {idx === 3 && <CheckCircle2 size={20} />}
                </div>
                <h4 className="text-[1.1rem] mb-2 text-[var(--text)] font-bold">{focus.title}</h4>
                <p className="text-[0.85rem] text-[var(--mid)] leading-relaxed">{focus.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="section-divider mb-24" />

        {/* Recent Certifications */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <h3 className="text-2xl font-bold">Recent Certifications</h3>
            <div className="filter-controls">
              {[
                { id: "all", label: "All" },
                { id: "ai", label: "AI & Agents" },
                { id: "cloud", label: "Cloud & MLOps" },
                { id: "pm", label: "Methodology" }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setCertFilter(filter.id)}
                  className={`filter-btn ${certFilter === filter.id ? "active" : ""}`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="cert-columns">
            <AnimatePresence mode="wait">
              <motion.div 
                key={certFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12"
              >
                <ul className="cert-list">
                  {filteredCerts.slice(0, Math.ceil(filteredCerts.length / 2)).map((cert, i) => (
                    <li key={i}>
                      {cert.name} <span className="pill">{cert.year}</span>
                    </li>
                  ))}
                </ul>
                <ul className="cert-list">
                  {filteredCerts.slice(Math.ceil(filteredCerts.length / 2)).map((cert, i) => (
                    <li key={i}>
                      {cert.name} <span className="pill">{cert.year}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <hr className="section-divider mb-24" />

        {/* General Certs */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8">General Certifications</h3>
          <div className="general-certs">
            {GENERAL_CERTS.map((cert) => (
              <span key={cert}>
                {cert}
              </span>
            ))}
          </div>
        </div>

        <hr className="section-divider mb-24" />

        {/* Honors */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8">Honors & Awards</h3>
          <div className="p-8 bg-[var(--accent-pale)] rounded-[var(--radius)] border border-[rgba(0,201,141,0.1)]">
            <span className="badge mb-4">{HONORS.company}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{HONORS.title}</h3>
            <p className="text-[var(--mid)] leading-relaxed">
              {HONORS.description}
            </p>
          </div>
        </div>

        <hr className="section-divider mb-24" />

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl font-bold mb-12">Core Competencies</h3>
          <div className="skills-grid">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={skill.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-[var(--radius)] border border-[var(--border)] transition-[var(--transition)] hover:border-[var(--primary)] hover:bg-[var(--surface)]"
              >
                <h3 className="text-[0.8rem] uppercase text-[var(--primary)] tracking-wider mb-3 font-bold">{skill.name}</h3>
                <p className="text-[0.9rem] text-[var(--mid)] leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
