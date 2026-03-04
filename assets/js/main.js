(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  const yearSpan = document.getElementById('year');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const open = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  submenuToggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const parent = e.currentTarget.closest('.has-submenu');
      const isOpen = parent.classList.toggle('open');
      e.currentTarget.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // Close open submenu if clicked outside (desktop)
  document.addEventListener('click', function (e) {
    const target = e.target;
    const openSubmenus = document.querySelectorAll('.has-submenu.open');
    openSubmenus.forEach(function (item) {
      if (!item.contains(target)) {
        item.classList.remove('open');
        const toggle = item.querySelector('.submenu-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject') || 'Contact from Portfolio';
      const message = formData.get('message');
      
      // Create mailto link
      const mailtoLink = `mailto:kylesemingandaya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Thank you for your message! Your email client should open with a pre-filled message.');
    });
  }
})();


