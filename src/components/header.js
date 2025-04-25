// header.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('fixed', window.scrollY > 0);
  });
  