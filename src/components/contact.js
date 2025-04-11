// contact.js
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icons img');
  
    socialIcons.forEach(icon => {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', () => {
        alert(`Redirecting to ${icon.alt}`);
      });
    });
  });
  