// Carrusel moderno con Tailwind CSS
const carousel = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-button');
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
let isTransitioning = false;

function moveCarousel() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // Aplicar transformación con Tailwind
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();

    // Resetear transición después de 500ms
    setTimeout(() => isTransitioning = false, 500);
}

function updateButtons() {
    // Remover clase active de todos los botones
    carouselButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Agregar clase active al botón actual
    if (carouselButtons[currentIndex]) {
        carouselButtons[currentIndex].classList.add('active');
    }
}

// Event listeners para los botones del carrusel
carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        moveCarousel();
    });
});

// Auto-play del carrusel cada 5 segundos
setInterval(() => {
    currentIndex++;
    moveCarousel();
}, 5000);

// Inicializar el carrusel
document.addEventListener('DOMContentLoaded', () => {
    moveCarousel();
});

// Pausar auto-play cuando el usuario interactúa
carousel.addEventListener('mouseenter', () => {
    clearInterval(window.carouselInterval);
});

carousel.addEventListener('mouseleave', () => {
    window.carouselInterval = setInterval(() => {
        currentIndex++;
        moveCarousel();
    }, 5000);
});
