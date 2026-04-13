/* ============================================================
   GEORGE BLIGH ONLINE COACHING — Global JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ── Nav: scroll state ─────────────────────────────────────
  const nav = document.querySelector('.nav');

  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ── Nav: mobile hamburger ─────────────────────────────────
  const hamburger = document.querySelector('.nav__hamburger');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      const isOpen = nav.classList.contains('mobile-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    document.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
      });
    });
  }

  // ── Scroll reveal ─────────────────────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    revealObserver.observe(el);
  });

  // ── Active nav link on scroll ─────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ── Contact form ──────────────────────────────────────────
  const form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const btn = form.querySelector('.form-submit');
      const originalText = btn.textContent;

      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Placeholder — replace with Formspree / Netlify / EmailJS endpoint
      setTimeout(() => {
        btn.textContent = 'Message Sent';
        form.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

})();
