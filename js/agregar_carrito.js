document.addEventListener("DOMContentLoaded", () => {
    const botonesAgregar = document.querySelectorAll(".btn-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];            
            carrito.push({ nombre, precio });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`${nombre} agregado al carrito.`);
        });
    });
});