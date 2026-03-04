document.addEventListener("DOMContentLoaded", () => {
  // ── Mobile Menu Toggle ──────────────────────────────────────
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ── Sticky Header ───────────────────────────────────────────
  // FIX: Only toggle .scrolled on the home page.
  // Inner pages pre-apply class="scrolled" in HTML; removing it at scroll-top
  // would strip the backdrop-blur/border on those pages.
  const nav = document.querySelector("nav");
  const isHomePage = Boolean(document.querySelector("section#home"));

  if (isHomePage) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // ── Scroll Reveal ───────────────────────────────────────────
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      if (el.getBoundingClientRect().top < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();

  // ── Scroll Spy ──────────────────────────────────────────────
  const sections = document.querySelectorAll("section[id]");

  const highlightActiveLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href*=${id}]`);
      if (link) {
        link.classList.toggle("active", scrollY > top && scrollY <= bottom);
      }
    });
  };

  window.addEventListener("scroll", highlightActiveLink, { passive: true });

  // ── Animated Counters (Career Snapshot) ─────────────────────
  // Counts up each .snapshot-value from 0 to its target when scrolled into view.
  const initCounters = () => {
    const counters = document.querySelectorAll(".snapshot-value");
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const raw = el.textContent.trim();
          const match = raw.match(/^(\d+)([%+]?)$/);
          if (!match) return;

          const target = parseInt(match[1], 10);
          const suffix = match[2];
          const duration = 1200;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((el) => observer.observe(el));
  };

  initCounters();

  // ── Certification Filter ─────────────────────────────────────
  const filterBtns = document.querySelectorAll(".filter-btn");
  const certItems = document.querySelectorAll(".cert-list li");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        certItems.forEach((item) => {
          const show =
            filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = show ? "flex" : "none";
        });
      });
    });
  }
});
