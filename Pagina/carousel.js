let currentIndex = 1;
displaySlide(currentIndex);

// Next/previous controls
function changeSlide(n) {
  displaySlide(currentIndex += n);
}

// Dot navigation controls
function currentSlide(n) {
  displaySlide(currentIndex = n);
}

function displaySlide(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("carousel-dot");
  
  if (n > slides.length) {currentIndex = 1}
  if (n < 1) {currentIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[currentIndex - 1].style.display = "block";
  dots[currentIndex - 1].className += " active";
}