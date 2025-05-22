// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = mobileMenuToggle.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
      
      if (spans[0].classList.contains('active')) {
        spans[0].style.transform = 'translateY(0.6rem) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-0.6rem) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // Theme selector
  const colorDots = document.querySelectorAll('.color-dot');
  
  colorDots.forEach(dot => {
    dot.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      
      // Remove active class from all dots
      colorDots.forEach(d => d.classList.remove('active'));
      
      // Add active class to clicked dot
      this.classList.add('active');
      
      // Update CSS variables
      document.documentElement.style.setProperty('--color-primary', color);
      
      // Adjust other colors based on selected primary
      const darkenFactor = 0.7;
      const lightenFactor = 1.3;
      
      // Convert hex to RGB, adjust, then convert back to hex
      const darkerColor = adjustColorBrightness(color, darkenFactor);
      const lighterColor = adjustColorBrightness(color, lightenFactor);
      
      document.documentElement.style.setProperty('--color-primary-dark', darkerColor);
      document.documentElement.style.setProperty('--color-primary-light', lighterColor);
    });
  });
  
  // Helper function to adjust color brightness
  function adjustColorBrightness(hex, factor) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    
    // Adjust brightness
    r = Math.round(r * factor);
    g = Math.round(g * factor);
    b = Math.round(b * factor);
    
    // Ensure values are within 0-255 range
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    
    // Convert back to hex
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Add scroll effects
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      header.style.backgroundColor = 'rgba(255, 253, 208, 0.95)';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'var(--color-background-light)';
      header.style.boxShadow = 'var(--shadow-sm)';
    }
  });
});