let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    totalCarrito += precio;

    // Actualiza el contador del carrito
    actualizarContadorCarrito();

    actualizarCarrito();
}

function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('contador-carrito');
    contadorCarrito.textContent = carrito.length;
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoElemento = document.getElementById('total-carrito');

    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${producto.nombre}</span>
            <span class="precio">$${producto.precio.toFixed(2)}</span>
        `;
        listaCarrito.appendChild(listItem);
    });

    totalCarritoElemento.textContent = totalCarrito.toFixed(2);
}

function comprar() {
    // Simular la lógica de compra (enviar datos al servidor, procesar pago, etc.)
    alert("¡Compra realizada con éxito! Gracias por tu compra.");
    
    // Reiniciar el carrito
    carrito = [];
    totalCarrito = 0;

    actualizarContadorCarrito();
    actualizarCarrito();
}

function mostrarCarrito() {
    // Agrega aquí la lógica para mostrar el carrito
    alert("Mostrar carrito"); // Puedes reemplazar esto con la lógica real
}
