function mostrarContactos() {
    const tabla = document.querySelector("#tabla_contactos tbody");
    tabla.innerHTML = ''; // Limpiar tabla
  
    const contactos = JSON.parse(localStorage.getItem('db_contacto')) || [];
  
    contactos.forEach(contacto => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${contacto.nombre}</td>
        <td>${contacto.correo}</td>
        <td>${contacto.asunto}</td>
        <td>${contacto.mensaje}</td>
        <td>${new Date(contacto.fecha).toLocaleString()}</td>
      `;
      tabla.appendChild(fila);
    });
  }

  mostrarContactos();
