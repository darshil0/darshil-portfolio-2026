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

  // Contact Form — async Formspree submission with inline feedback
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
