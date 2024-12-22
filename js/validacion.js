const formulario = document.getElementById("formulario");
console.log(formulario);

formulario.addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();


    const errorNombre = document.getElementById("errorNombre"); 
    const errorApellido = document.getElementById("errorApellido"); 
    const errorEmail = document.getElementById("errorEmail");
    const errorMensaje = document.getElementById("errorMensaje");

    // Inicializar validación
    let formularioValido = true;


    if (nombre === "") {
        errorNombre.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorNombre.classList.add("d-none");
    }

    if (apellido === "") {
        errorApellido.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorApellido.classList.add("d-none");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorEmail.classList.add("d-none");
    }

  
    if (mensaje.length < 10) {
        errorMensaje.classList.remove("d-none");
        formularioValido = false;
    } else {
        errorMensaje.classList.add("d-none");
    }

    if (formularioValido) {
        alert("Formulario válido, enviando datos...")
        formulario.submit();
    }

});