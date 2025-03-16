// RSVP Email Function
function rsvpEmail() {
  const subject = "RSVP for Tania’s 21st Birthday";
  const body = `Dear Chad & Tatianna,

I would love to RSVP for Tania's 21st Birthday! Here are my details:

👤 Full Name:
👥 Guest Count:
🥂 I will be bringing (drinks/appetizers):

🎉 Looking forward to celebrating this special day!

With best regards,
[Your Name Here]`;

  window.location.href = `mailto:em_tatianna@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Confetti Animation
const confettiContainer = document.getElementById('confetti');
function createConfetti() {
  const confettiPiece = document.createElement('div');
  confettiPiece.classList.add('confetti-piece');
  confettiPiece.style.left = `${Math.random() * 100}vw`;
  confettiPiece.style.animationDuration = `${Math.random() * 2 + 1}s`;
  confettiContainer.appendChild(confettiPiece);
  setTimeout(() => { confettiPiece.remove(); }, 2000);
}
for (let i = 0; i < 100; i++) {
  setTimeout(createConfetti, Math.random() * 1000);
}

// Scroll-triggered fade-in
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// Scroll-to-top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Basic parallax effect for background
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.1;
  document.body.style.setProperty('--parallax', `${offset}px`);
  document.body.style.backgroundPositionY = `calc(50% + ${offset * 0.5}px)`;
});
