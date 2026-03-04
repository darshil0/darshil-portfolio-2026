document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded =
        navToggle.getAttribute("aria-expanded") === "true" || false;
      navToggle.setAttribute("aria-expanded", !expanded);
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Sticky Header
  // FIX: Only toggle the scrolled class on the home page (index.html).
  // On all other pages the nav has the "scrolled" class pre-applied in HTML,
  // so the scroll listener must not remove it when the user scrolls back to top.
  const nav = document.querySelector("nav");
  const isHomePage = document.querySelector("section#home") !== null;

  if (isHomePage) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load

  // Active Link Highlight (Simple Scroll Spy)
  const sections = document.querySelectorAll("section[id]");
  const highlightActiveLink = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-links a[href*=" + sectionId + "]")
          ?.classList.add("active");
      } else {
        document
          .querySelector(".nav-links a[href*=" + sectionId + "]")
          ?.classList.remove("active");
      }
    });
  };

  window.addEventListener("scroll", highlightActiveLink);

  // Certification Filtering (Only on skills.html)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const certItems = document.querySelectorAll(".cert-list li");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Update active button
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        certItems.forEach((item) => {
          if (
            filter === "all" ||
            item.getAttribute("data-category") === filter
          ) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});
