let currentIndex = 0;
showSlide(currentIndex);

// Mueve la diapositiva hacia adelante o hacia atrás
function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

// Muestra la diapositiva actual
function currentSlide(n) {
    currentIndex = n - 1;
    showSlide(currentIndex);
}

function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    }

    // Oculta todas las diapositivas y elimina el estado activo de los dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Muestra la diapositiva actual y activa el dot correspondiente
    slides[currentIndex].style.display = "block";
    slides[currentIndex].classList.add("fade");
    dots[currentIndex].className += " active-dot";
}