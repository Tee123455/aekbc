// Contact form handler using EmailJS
export function initContactForm() {
  // Initialize EmailJS
  emailjs.init('p2RIQ6jaXNpHSPGxR'); // Replace with your EmailJS Public Key

  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (!form || !statusEl) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Show loading state
    statusEl.textContent = '⏳ Sending...';
    statusEl.style.color = 'var(--muted)';

    emailjs.sendForm('service_kyrxrfi', 'template_gaijpr5', this)
      .then(() => {
        statusEl.textContent = '✅ Message sent successfully!';
        statusEl.style.color = '#76e4c3';
        form.reset();
        // Clear message after 5 seconds
        setTimeout(() => {
          statusEl.textContent = '';
        }, 5000);
      })
      .catch((err) => {
        statusEl.textContent = '❌ Failed to send: ' + JSON.stringify(err);
        statusEl.style.color = '#ff6b6b';
        console.error('Email error:', err);
      });
  });
}
