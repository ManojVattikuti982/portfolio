// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
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
