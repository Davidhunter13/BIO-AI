$(document).ready(function() {
    setTimeout(function() {
        loading_spin(false);
    }, 1000); // 1000 milisegundos = 1 segundo
});

function loading_spin(estado) {
    if (estado) {
        $('#loader').show();
    } else {
        $('#loader').hide();
    }
}

const flotantes = document.querySelectorAll('.flotante');
const bodyHeight = document.body.scrollHeight; // Altura total del body
const spacing = bodyHeight / flotantes.length; // Espaciado entre elementos

flotantes.forEach((el, index) => {
    // Posición vertical con un poco de aleatoriedad
    const y = spacing * index + (Math.random() * spacing * 0.5);
    
    // Puedes mantener left/right desde el CSS
    el.style.top = `${y}px`;
});
