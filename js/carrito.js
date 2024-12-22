document.addEventListener("DOMContentLoaded", () => {
    const tablaCarrito = document.getElementById("tablaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    const botonComprar = document.getElementById("boton_comprar");
    // Obtener carrito de localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const renderizarCarrito = () => {
 
        tablaCarrito.innerHTML = "";
        if (carrito.length === 0) {
            tablaCarrito.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            totalCarrito.textContent = "0.00";
            return;
        }

        carrito.forEach((producto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            tablaCarrito.appendChild(fila);
        });

        // Actualizar el total
        calcularTotal();
    };


    const calcularTotal = () => {     
        const total = carrito.reduce((suma, producto) => suma + parseFloat(producto.precio), 0);
        totalCarrito.textContent = total.toFixed(2);

    };

    tablaCarrito.addEventListener("click", (event) => { 
  
        if (event.target.classList.contains("btn-danger")) { 
            const index = event.target.getAttribute("data-index"); 
            carrito.splice(index, 1); 
            localStorage.setItem("carrito", JSON.stringify(carrito)); 
            renderizarCarrito(); 
        }
    });
    renderizarCarrito();

    botonComprar.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        alert("Gracias por su compra. A la brevedad nos comunicaremos con usted.");
        carrito.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderizarCarrito();
    });
});