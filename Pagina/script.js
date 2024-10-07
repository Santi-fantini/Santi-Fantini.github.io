let slideIndex = 1;
const images = [
  { src: "/Imagenes/foto-carrousel--4.jpeg", caption: "1 / 5" },
  { src: "/Imagenes/foto-carrousel--2.jpeg", caption: "2 / 5" },
  { src: "/Imagenes/foto-carrousel--3.jpeg", caption: "3 / 5" },
  { src: "/Imagenes/foto-carrousel--5.jpeg", caption: "4 / 5" },
  { src: "/Imagenes/foto-carrousel--1.jpeg", caption: "5 / 5" }
];

// Función para generar dinámicamente las imágenes y dots

function createSlides() {
  const slideshowContainer = document.getElementById('slideshow-container');
  const dotsContainer = document.getElementById('dots-container');
  
  images.forEach((image, index) => {
    // Crear cada slide
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('mySlides', 'fade');
    slideDiv.innerHTML = `
      <div class="numbertext">${image.caption}</div>
      <img src="${image.src}" style="width:100%">
    `;
    slideshowContainer.appendChild(slideDiv);
    
    // Crear cada dot
    const dotSpan = document.createElement('span');
    dotSpan.classList.add('dot');
    dotSpan.onclick = function() { currentSlide(index + 1); };
    dotsContainer.appendChild(dotSpan);
  });
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Inicializar el carrusel
createSlides();
showSlides(slideIndex);