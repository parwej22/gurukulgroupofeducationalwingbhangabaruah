// your code goes here
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(changeSlide, 3000);
// MOBILE MENU TOGGLE
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// DROPDOWN TOGGLE
function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

// CLICK OUTSIDE CLOSE
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(d => d.classList.remove("show"));
  }
}
