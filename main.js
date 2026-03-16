/* HOF — Spring Summer 2026 · Prelude */

// Navigation scroll behavior
const nav = document.getElementById('nav');
if (nav) {
  // Apply scrolled state immediately on load if already scrolled
  if (window.scrollY > 40) nav.classList.add('scrolled');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile menu
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('active'));
  });
}

// Product page gallery
const mainImg = document.querySelector('.product-gallery-main img');
const thumbs = document.querySelectorAll('.product-gallery-thumbs .thumb');
if (mainImg && thumbs.length) {
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.querySelector('img').src;
      mainImg.src = src;
      mainImg.alt = thumb.querySelector('img').alt;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // Close all accordions in the same parent
    item.parentElement.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
    });

    // Toggle the clicked one
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// Open first accordion by default
document.querySelectorAll('.craft-sheet').forEach(sheet => {
  const first = sheet.querySelector('.accordion-item');
  if (first) first.classList.add('open');
});

// Fade-in on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  fadeObserver.observe(el);
});

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.filter-bar');
    parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const grid = btn.closest('.container').querySelector('.collection-grid');
    if (!grid) return;

    grid.querySelectorAll('.collection-card').forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else if (filter === 'ss26') {
        card.style.display = card.dataset.season === 'ss26' ? '' : 'none';
      } else if (filter === 'collector') {
        card.style.display = card.dataset.type === 'collector' ? '' : 'none';
      } else if (filter === 'seasonal') {
        card.style.display = card.dataset.type === 'seasonal' ? '' : 'none';
      } else if (filter === 'permanent') {
        card.style.display = card.dataset.type === 'permanent' ? '' : 'none';
      }
    });
  });
});
