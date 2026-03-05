document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector("nav");
  const isHomePage = Boolean(document.querySelector("section#home"));

  // --- Theme Management ---
  const themeToggle = document.querySelector("#theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) {
      themeToggle.innerHTML =
        theme === "dark"
          ? '<i class="fas fa-sun"></i>'
          : '<i class="fas fa-moon"></i>';
    }
  };

  setTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const theme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      setTheme(theme);
    });
  }

  // --- Scroll Progress Bar ---
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.prepend(progressBar);

  // --- Mobile Menu Toggle ---
  if (navToggle && navLinks) {
    const toggleMenu = () => {
      navLinks.classList.toggle("open");
      const expanded = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", String(expanded));
    };

    navToggle.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          toggleMenu();
        }
      });
    });
  }

  // --- Global Scroll Listeners ---
  window.addEventListener(
    "scroll",
    () => {
      // Sticky Nav
      if (isHomePage) {
        nav.classList.toggle("scrolled", window.scrollY > 50);
      }

      // Scroll Progress
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";

      // Staggered Reveal
      revealOnScroll();
    },
    { passive: true },
  );

  if (!isHomePage) {
    nav.classList.add("scrolled");
  }

  // --- staggered reveal ---
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach((el) => {
      if (el.getBoundingClientRect().top < triggerBottom) {
        el.classList.add("active");
      }
    });
  };
  revealOnScroll();

  // --- Animated Counters ---
  const counters = document.querySelectorAll(".snapshot-value");
  counters.forEach((c) => {
    c.dataset.target = c.textContent.trim();
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const original = el.dataset.target;
        const target = parseInt(original, 10);
        const suffix = original.replace(/[0-9]/g, "");
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

  // --- Certification Filtering ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  const certItems = document.querySelectorAll(".cert-list li");

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
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

  // --- Copy Email Feature ---
  window.copyEmail = () => {
    const email = "darshils99@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const btn = document.querySelector("#copy-email-btn");
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Copied! <i class="fas fa-check"></i>';
      btn.style.background = "var(--accent)";
      btn.style.borderColor = "var(--accent)";
      btn.style.color = "white";
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = "";
        btn.style.borderColor = "";
        btn.style.color = "";
      }, 2000);
    });
  };

  // --- Contact Form ---
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    const submitBtn = document.getElementById("form-submit");
    const statusEl = document.getElementById("form-status");

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        'Sending… <i class="fas fa-circle-notch fa-spin ml-2"></i>';
      statusEl.className = "hidden form-status";

      try {
        const res = await fetch(contactForm.action, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(contactForm),
        });

        if (res.ok) {
          statusEl.textContent =
            "✓ Message sent! I'll get back to you shortly.";
          statusEl.className = "form-status form-status--success";
          contactForm.reset();
          submitBtn.innerHTML =
            'Send Message <i class="fas fa-paper-plane ml-2"></i>';
          submitBtn.disabled = false;
        } else {
          const data = await res.json().catch(() => ({}));
          throw new Error(
            data?.errors?.[0]?.message ||
              "Submission failed. Please try again.",
          );
        }
      } catch (err) {
        statusEl.textContent = err.message;
        statusEl.className = "form-status form-status--error";
        submitBtn.innerHTML =
          'Send Message <i class="fas fa-paper-plane ml-2"></i>';
        submitBtn.disabled = false;
        setTimeout(() => {
          statusEl.className = "hidden form-status";
        }, 6000);
      }
    });
  }
});
