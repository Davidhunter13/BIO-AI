document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = this.querySelector('ion-icon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        icon.setAttribute('name', 'eye-off-outline');
    } else {
        passwordField.type = 'password';
        icon.setAttribute('name', 'eye-outline');
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    loading_spin(true);

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (usuario === '' || password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios'
        });
        loading_spin(false);
        return;
    }

    // Validar credenciales
    if (usuario === 'drparra@poli.edu.co' && password === '1234') {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Inicio de sesión exitoso',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'dashboard.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas'
        });
    }

    loading_spin(false);
});
