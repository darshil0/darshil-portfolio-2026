import React from "react";
import { motion } from "motion/react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  affiliation: string;
  delay?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, affiliation, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-[var(--surface)] p-10 rounded-[var(--radius)] border border-[var(--border)] relative transition-[var(--transition)] hover:border-[var(--primary)] hover:shadow-xl hover:-translate-y-1"
    >
      <div className="font-display text-8xl text-[var(--primary-pale)] absolute -top-6 left-6 leading-none opacity-50 z-0">“</div>
      <p className="text-[1.1rem] leading-relaxed text-[var(--text)] mb-8 relative z-10 italic">{quote}</p>
      <div className="border-t border-[var(--border)] pt-4">
        <p className="font-bold text-[var(--text)] text-base">{author}</p>
        <p className="text-[0.85rem] text-[var(--mid)] mt-0.5">{affiliation}</p>
      </div>
    </motion.div>
  );
};
