// ============================================================
//  main.js  — navigation, scroll effects, filter, animations
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Sticky header shadow on scroll ──────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      })
    );
  }

  // ── Project filter ───────────────────────────────────────────
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ── Scroll-reveal (IntersectionObserver) ────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ── Contact form ─────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      // Formspree submission (replace YOUR_FORM_ID in contact.html)
      const data = new FormData(contactForm);
      const action = contactForm.getAttribute('action');
      try {
        const res = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          contactForm.style.display = 'none';
          document.getElementById('form-success').style.display = 'block';
        } else {
          btn.textContent = 'Error — try again';
          btn.disabled = false;
        }
      } catch {
        btn.textContent = 'Error — try again';
        btn.disabled = false;
      }
    });
  }

  // ── Active nav link highlight (SPA-style, for index) ─────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPath) a.classList.add('active');
  });

  // ── Lightbox ─────────────────────────────────────────────────
  const lightbox     = document.getElementById('lightbox');
  if (lightbox) {
    const lbImg      = document.getElementById('lightbox-img');
    const lbCaption  = document.getElementById('lightbox-caption');
    const lbCounter  = document.getElementById('lightbox-counter');
    const lbClose    = document.getElementById('lightbox-close');
    const lbPrev     = document.getElementById('lightbox-prev');
    const lbNext     = document.getElementById('lightbox-next');

    const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));
    let current = 0;

    function showImage(index) {
      current = (index + triggers.length) % triggers.length;
      const t = triggers[current];
      lbImg.src     = t.dataset.src;
      lbImg.alt     = t.dataset.alt || '';
      lbCaption.textContent = t.dataset.caption || '';
      lbCounter.textContent = triggers.length > 1
        ? `${current + 1} / ${triggers.length}` : '';
      // Show/hide arrows when only one image
      lbPrev.hidden = lbNext.hidden = triggers.length <= 1;
    }

    function openLightbox(index) {
      showImage(index);
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      triggers[current].focus();
    }

    // Open on click
    triggers.forEach((btn, i) =>
      btn.addEventListener('click', () => openLightbox(i))
    );

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => showImage(current - 1));
    lbNext.addEventListener('click', () => showImage(current + 1));

    // Close on backdrop click (outside the image)
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   showImage(current - 1);
      if (e.key === 'ArrowRight')  showImage(current + 1);
    });
  }


});
