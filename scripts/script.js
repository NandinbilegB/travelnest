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
