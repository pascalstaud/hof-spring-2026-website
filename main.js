/* HOF — Spring Summer 2026 · Prelude */

// Navigation scroll behavior
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Mobile menu
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle) {
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
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const src = thumb.querySelector('img').src;
    mainImg.src = src;
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  });
});

// Fade-in on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .about-section, .consultation').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});
