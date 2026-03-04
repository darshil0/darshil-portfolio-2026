document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector("nav");
  const isHomePage = Boolean(document.querySelector("section#home"));

  // Mobile Menu Toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", String(expanded));
    });
  }

  // Sticky Header
  if (isHomePage) {
    window.addEventListener(
      "scroll",
      () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
      },
      { passive: true },
    );
  } else {
    nav.classList.add("scrolled");
  }

  // Scroll Reveal
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

  // Animated Counters
  const counters = document.querySelectorAll(".snapshot-value");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.textContent, 10);
        const suffix = el.textContent.replace(/[0-9]/g, "");
        let count = 0;
        const duration = 1200;
        const increment = target / (duration / 16);

        const updateCount = () => {
          count += increment;
          if (count < target) {
            el.textContent = Math.round(count) + suffix;
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = target + suffix;
          }
        };
        updateCount();
        observer.unobserve(el);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((c) => observer.observe(c));

  // Certification Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const certItems = document.querySelectorAll(".cert-list li");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Update active button
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        // Filter items
        certItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      });
    });
  }
});
