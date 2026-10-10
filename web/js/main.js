/* ===== HEADER SCROLL ===== */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ===== MOBILE NAV ===== */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mainNav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainNav.classList.remove('open');
  });
});

/* ===== HERO SLIDER ===== */
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('heroDots');
let currentSlide = 0;
let slideTimer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `اسلاید ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.hero-dot');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  resetTimer();
}

document.getElementById('heroNext').addEventListener('click', () => goToSlide(currentSlide + 1));
document.getElementById('heroPrev').addEventListener('click', () => goToSlide(currentSlide - 1));

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
}
resetTimer();

/* ===== SCROLL TO TOP ===== */
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 600);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = 'درخواست شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.';
  contactForm.reset();
  setTimeout(() => { formMsg.textContent = ''; }, 5000);
});

/* ===== INTERSECTION OBSERVER (reveal on scroll) ===== */
const revealElements = document.querySelectorAll('.collection-card, .why-card, .process-card-large, .process-card-small, .philosophy-text, .philosophy-image, .contact-info');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
