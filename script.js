/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

/* =========================
   DROPDOWN TOGGLE (ABOUT / FACILITIES)
========================= */
function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

/* =========================
   CLOSE DROPDOWN WHEN CLICK OUTSIDE
========================= */
window.addEventListener("click", function (e) {
  let isButton = e.target.classList.contains("dropbtn");

  if (!isButton) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((d) => {
      d.classList.remove("show");
    });
  }
});

/* =========================
   AUTO IMAGE SLIDER (HOME PAGE)
========================= */
let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  if (slides.length === 0) return;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(autoSlide, 3000);
