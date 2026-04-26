function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

function toggleDropdown(btn) {
  let menu = btn.nextElementSibling;
  menu.classList.toggle("show");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function autoSlide() {
  if (slides.length === 0) return;

  slides.forEach(s => s.classList.remove("active"));

  slides[index].classList.add("active");

  index = (index + 1) % slides.length;
}

setInterval(autoSlide, 3000);
