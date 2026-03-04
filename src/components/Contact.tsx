import { CONTACT_INFO, LANGUAGES } from "../constants";

export const Contact = () => {
  return (
    <section id="contact" className="flex justify-center items-start py-32 px-6 min-h-[60vh] bg-[var(--primary-pale)]">
      <div className="bg-[var(--surface)] p-10 rounded-[var(--radius)] border border-[var(--border)] max-w-[700px] w-full shadow-lg">
        <h2 className="text-3xl font-bold mb-1">Darshil Shah</h2>
        <p className="text-[var(--primary)] font-semibold mb-8 text-[0.95rem]">
          Healthcare QA & Functional Testing Lead &nbsp;·&nbsp; Dallas–Fort Worth Metroplex, TX &nbsp;·&nbsp; US Citizen
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="contact-item">
            <span className="block text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-1">Email</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-[var(--text)] hover:text-[var(--primary)] transition-colors">{CONTACT_INFO.email}</a>
          </div>
          <div className="contact-item">
            <span className="block text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-1">Phone</span>
            <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="font-medium text-[var(--text)] hover:text-[var(--primary)] transition-colors">{CONTACT_INFO.phone}</a>
          </div>
          <div className="contact-item">
            <span className="block text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-1">Portfolio</span>
            <a href={`https://${CONTACT_INFO.portfolio}`} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--text)] hover:text-[var(--primary)] transition-colors">{CONTACT_INFO.portfolio}</a>
          </div>
          <div className="contact-item">
            <span className="block text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-1">Location</span>
            <span className="font-medium text-[var(--text)]">{CONTACT_INFO.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end border-t border-[var(--border)] mt-8 pt-8">
          <div>
            <span className="block text-[0.75rem] uppercase text-[var(--subtle)] font-bold mb-1">Languages</span>
            <ul className="flex flex-col gap-1 text-[0.9rem]">
              {LANGUAGES.map(lang => (
                <li key={lang.name}>
                  {lang.flag} {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-social">
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
            >
              LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
