import { TESTIMONIALS } from "../constants";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Endorsements</p>
          <h2>Client & Colleague Testimonials</h2>
          <p className="subtitle">
            Feedback from industry professionals on leadership, technical excellence, and AI innovation.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <TestimonialCard
              key={idx}
              quote={t.quote}
              author={t.author}
              affiliation={t.affiliation}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
