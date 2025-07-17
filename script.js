// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('navList');
  hamburger.addEventListener('click', function() {
    navList.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
  // Close menu on nav link click (mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      hamburger.classList.remove('open');
    });
  });
  // Contact form submission (dummy, just for UI)
  const form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    });
  }
});
// ...existing code...
