    let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? "block" : "none";
  });
  index = (index + 1) % slides.length;
  setTimeout(showSlide, 3000); // Change image every 3s
}

showSlide();
 
