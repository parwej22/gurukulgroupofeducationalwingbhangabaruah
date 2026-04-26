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
