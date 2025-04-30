document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Previene el envío real
  
      const nombre = form.querySelector("input[placeholder='Nombre']").value.trim();
      const correo = form.querySelector("input[placeholder='Correo electrónico']").value.trim();
      const asunto = form.querySelector("input[placeholder='Asunto']").value.trim();
      const mensaje = form.querySelector("textarea").value.trim();
  
      if (!nombre || !correo || !asunto || !mensaje) {
        mostrarToast("Por favor, completa todos los campos.", "warning");
        return;
      }
  
      if (!validarCorreo(correo)) {
        mostrarToast("Por favor, ingresa un correo electrónico válido.", "error");
        return;
      }
  
      // Guardar en localStorage como base de datos db_contacto
      const nuevoContacto = {
        nombre,
        correo,
        asunto,
        mensaje,
        fecha: new Date().toISOString()
      };
  
      let contactos = JSON.parse(localStorage.getItem('db_contacto')) || [];
      contactos.push(nuevoContacto);
      localStorage.setItem('db_contacto', JSON.stringify(contactos));
  
      mostrarToast("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.", "success");
      form.reset();
    });
  
    function validarCorreo(correo) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(correo);
    }
  
    function mostrarToast(mensaje, tipo) {
      Swal.fire({
        toast: true,
        position: 'bottom-end',
        icon: tipo,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
  });
  