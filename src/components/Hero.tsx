import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "../constants";

export const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-[var(--surface)] relative overflow-hidden">
      <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-[radial-gradient(circle,var(--primary-pale)_0%,transparent_70%)] z-0" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[var(--primary)] font-semibold text-[0.85rem] uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
              US Citizen · Available for Leadership Roles
            </div>
            <h1 className="text-gradient mb-6">
              Healthcare QA & Functional Testing Lead <br />
              <span className="italic font-light">9+ yrs Global Healthcare QA · 40% Cost Savings & Safer Patient Outcomes</span>
            </h1>
            <p className="text-[1.1rem] text-[var(--mid)] mb-10 max-w-[600px] leading-relaxed">
              Ex‑Accenture, Kaiser, Infosys, Prime. AI‑Enabled QA with ChatGPT & Claude. 
              I lead QA teams that do far more than find bugs; we prevent patient safety risks, 
              drive measurable business impact, and enable safer, smarter healthcare innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#experience" className="btn">
                View Experience <ChevronRight size={18} className="ml-2" />
              </a>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-[var(--bg)] p-8 rounded-[var(--radius)] border border-[var(--border)]"
          >
            <h3 className="text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-6 tracking-wider">Career Snapshot</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <div className="font-mono text-4xl md:text-5xl font-bold text-[var(--primary)] leading-none shrink-0">40%</div>
                <div className="text-[0.85rem] leading-relaxed text-[var(--mid)]">Reduction in patient care costs through shift-left testing.</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="font-mono text-4xl md:text-5xl font-bold text-[var(--primary)] leading-none shrink-0">30%</div>
                <div className="text-[0.85rem] leading-relaxed text-[var(--mid)]">Improvement in patient wait times via QA automation.</div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="font-mono text-4xl md:text-5xl font-bold text-[var(--primary)] leading-none shrink-0">15+</div>
                <div className="text-[0.85rem] leading-relaxed text-[var(--mid)]">Global QA professionals led across multiple time zones.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
