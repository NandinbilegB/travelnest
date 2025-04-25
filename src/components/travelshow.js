// travelshow.js
let currentIndex = 0;
const slides = document.querySelectorAll('.image-container .slide');

function moveSlide(direction) {
  if (direction === 'left') {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  } else {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  }

  document.querySelector('.image-container').style.transform =
    `translateX(-${currentIndex * 100}vw)`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.image-container').style.transform = `translateX(0)`;
});
