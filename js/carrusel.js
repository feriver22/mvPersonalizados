const carrusel = document.querySelector('.imagenes-carrusel');
const botonesCarrusel = document.querySelectorAll('.boton-carrusel');
let indiceActual = 0;
const imagenes = document.querySelectorAll('.imagen-carrusel');
let enTransicion = false; // Variable para controlar si está en transición

// Función para mover el carrusel
function moverCarrusel() {
    if (enTransicion) return; // No permitir movimiento si ya está en transición
    enTransicion = true; // Marcar que está en transición

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    
    // Aplicar la transformación al carrusel
    carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;
    actualizarBotones();

    // Después de 0.5s (la duración de la transición), permitir el siguiente movimiento
    setTimeout(() => enTransicion = false, 500);
}

// Función para actualizar los botones del carrusel
function actualizarBotones() {
    botonesCarrusel.forEach(boton => boton.style.backgroundColor = '#fff');
    botonesCarrusel[indiceActual].style.backgroundColor = '#ffd700';
}

// Función para mover el carrusel manualmente
botonesCarrusel.forEach(boton => {
    boton.addEventListener('click', () => {
        indiceActual = parseInt(boton.getAttribute('data-index'));
        moverCarrusel();
    });
});

// Deslizar el carrusel automáticamente cada 5 segundos
setInterval(() => {
    indiceActual++;
    moverCarrusel();
}, 5000);

// Iniciar el carrusel
moverCarrusel();
