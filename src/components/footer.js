// footer.js
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const year = new Date().getFullYear();
    footer.innerHTML = `&copy; ${year} TravelNest. All rights reserved.`;
  
    // Scroll to top on click (optional)
    footer.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  