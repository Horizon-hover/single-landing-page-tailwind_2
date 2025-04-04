// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Elements
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Initialize - Start closed
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
  }

  // Simple Toggle Function
  const toggleMenu = (open) => {
    const isOpen = open ?? mobileMenu.classList.contains('hidden');
    
    // Toggle menu visibility
    mobileMenu.classList.toggle('hidden', !isOpen);
    mobileMenuButton?.setAttribute('aria-expanded', isOpen.toString());
    
    // Remove hamburger button when menu is open
    mobileMenuButton?.classList.toggle('hidden', isOpen);
    
    // Toggle body scroll
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  // Event Listeners
  if (mobileMenuButton && mobileMenu) {
    // Open menu
    mobileMenuButton.addEventListener('click', () => toggleMenu(true));
    
    // Close menu
    mobileMenuClose?.addEventListener('click', () => toggleMenu(false));
    
    // Close when clicking links
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          toggleMenu(false);
        }
      }
    });

    // Close with ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
        toggleMenu(false);
      }
    });
  }

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#') return;
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (!mobileMenu?.classList.contains('hidden')) {
          toggleMenu(false);
        }
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll Animations
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .showcase-item').forEach(el => {
    animateOnScroll.observe(el);
  });
});