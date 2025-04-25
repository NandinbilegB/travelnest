document.addEventListener("DOMContentLoaded", () => {
  // Book button show payment section
  const bookBtn = document.querySelector(".book");
  const paymentSection = document.getElementById("payment-section");

  if (bookBtn && paymentSection) {
    bookBtn.addEventListener("click", () => {
      paymentSection.style.display = "flex"; // or "block" if not using flexbox
      paymentSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Optional: Wave animation effect
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
});
document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.querySelector(".book");
  const paymentSection = document.getElementById("payment-section");

  console.log("Book button:", bookBtn); // ✅ check here
  console.log("Payment section:", paymentSection); // ✅ check here

  if (bookBtn && paymentSection) {
    bookBtn.addEventListener("click", () => {
      console.log("Book button clicked"); // ✅ check this in console
      paymentSection.style.display = "flex";
      paymentSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
