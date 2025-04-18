// script.js

document.addEventListener("click", function (e) {
    const wave = document.createElement("span");
    wave.classList.add("wave");
    wave.style.left = e.pageX + "px";
    wave.style.top = e.pageY + "px";
    document.body.appendChild(wave);

    setTimeout(() => {
        wave.remove();
    }, 500);
});
function scrollToSection(className) {
  const section = document.querySelector(`.${className}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  