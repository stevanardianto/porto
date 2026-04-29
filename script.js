// INTERSECTION OBSERVER UNTUK SIDE-IN ANIMATION
const sideElements = document.querySelectorAll('.side-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });
sideElements.forEach(el => observer.observe(el));

// navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.85)';
    navbar.style.boxShadow = 'none';
  }
});

// mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeNav');
const mobileLinks = document.querySelectorAll('.mobile-nav a');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => mobileNav.classList.add('open'));
  closeNav.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileLinks.forEach(link => link.addEventListener('click', () => mobileNav.classList.remove('open')));
}

// Smooth anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileNav.classList.contains('open')) mobileNav.classList.remove('open');
    }
  });
});

// form handling + toast notifikasi
const form = document.getElementById('contactForm');
const toast = document.getElementById('toastMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if (!name || !email || !msg) {
    toast.innerHTML = '⚠️ Harap lengkapi semua kolom!';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(40px)';
    }, 2500);
    return;
  }
  toast.innerHTML = '🎉 Terima kasih! Pesanmu sudah terkirim. Akan segera direspon.';
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(40px)';
  }, 3000);
  form.reset();
});

// efek interaktif tambahan: hover pada card memperkuat animasi side-in (opsional)
const cards = document.querySelectorAll('.card, .contact-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.25s ease-out';
  });
});