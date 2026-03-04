import { CONTACT_INFO } from "../constants";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setActiveSection: (section: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar = ({ 
  scrolled, 
  activeSection, 
  isMenuOpen, 
  toggleMenu, 
  setActiveSection, 
  setIsMenuOpen 
}: NavbarProps) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center py-4 px-6 md:px-8 transition-[var(--transition)] ${scrolled ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-[var(--border)]" : "bg-transparent"}`} aria-label="Main navigation">
      <div 
        className="font-display text-xl font-extrabold text-[var(--text)] cursor-pointer" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        aria-label="Darshil Shah - Back to top"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        Darshil<span className="text-[var(--primary)]">.QA</span>
      </div>
      
      <ul className={`flex gap-8 ${isMenuOpen ? "flex flex-col absolute top-full left-0 right-0 bg-[var(--surface)] p-6 border-b border-[var(--border)] gap-4 z-[999]" : "hidden md:flex"}`}>
        <li><a href="#home" className={`text-[0.9rem] font-medium transition-colors ${activeSection === "home" ? "text-[var(--primary)]" : "text-[var(--mid)] hover:text-[var(--primary)]"}`} onClick={() => { setActiveSection("home"); setIsMenuOpen(false); }}>Home</a></li>
        <li><a href="#experience" className={`text-[0.9rem] font-medium transition-colors ${activeSection === "experience" ? "text-[var(--primary)]" : "text-[var(--mid)] hover:text-[var(--primary)]"}`} onClick={() => { setActiveSection("experience"); setIsMenuOpen(false); }}>Experience</a></li>
        <li><a href="#skills" className={`text-[0.9rem] font-medium transition-colors ${activeSection === "skills" ? "text-[var(--primary)]" : "text-[var(--mid)] hover:text-[var(--primary)]"}`} onClick={() => { setActiveSection("skills"); setIsMenuOpen(false); }}>AI & Skills</a></li>
        <li><a href="#testimonials" className={`text-[0.9rem] font-medium transition-colors ${activeSection === "testimonials" ? "text-[var(--primary)]" : "text-[var(--mid)] hover:text-[var(--primary)]"}`} onClick={() => { setActiveSection("testimonials"); setIsMenuOpen(false); }}>Testimonials</a></li>
        <li><a href="#contact" className={`text-[0.9rem] font-medium transition-colors ${activeSection === "contact" ? "text-[var(--primary)]" : "text-[var(--mid)] hover:text-[var(--primary)]"}`} onClick={() => { setActiveSection("contact"); setIsMenuOpen(false); }}>Contact</a></li>
        <li className="md:hidden mt-4">
          <a href={`mailto:${CONTACT_INFO.email}`} className="btn w-full justify-center">Get In Touch</a>
        </li>
      </ul>

      <div className="hidden md:block">
        <a href={`mailto:${CONTACT_INFO.email}`} className="btn">Get In Touch</a>
      </div>

      <button 
        className="flex md:hidden flex-col gap-1 bg-none border-none cursor-pointer" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-[var(--transition)] ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-[var(--transition)] ${isMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-5 h-0.5 bg-[var(--text)] transition-[var(--transition)] ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </button>
    </nav>
  );
};
