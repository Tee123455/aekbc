// Mobile menu toggle functionality
export function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.hasAttribute('hidden') === false;
    if (isOpen) {
      mobileMenu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu when link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for same-page links
export function initSmoothScroll() {
  const mobileMenu = document.getElementById('mobileMenu');
  const toggle = document.querySelector('.menu-toggle');

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu) {
          mobileMenu.setAttribute('hidden', '');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

// Event filter functionality
export function initEventFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = Array.from(document.querySelectorAll('#eventList .event'));

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.filter;
      items.forEach(el => {
        const title = el.querySelector('h3')?.textContent.toLowerCase() || '';
        const date = el.querySelector('.date')?.textContent.toLowerCase() || '';
        const show = f === 'all' || (f === 'sun' && date.includes('sun')) || (f === 'wed' && date.includes('wed'));
        el.style.display = show ? 'flex' : 'none';
      });
    });
  });
}

// Update year in footer
export function updateFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Accordion toggle functionality
export function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });
}

// Initialize all modules
export function init() {
  initMobileMenu();
  initSmoothScroll();
  initEventFilter();
  updateFooterYear();
  initAccordion();
}
