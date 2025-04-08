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
