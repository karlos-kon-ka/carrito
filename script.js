let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    totalCarrito += precio;

    actualizarCarrito();
}

function actualizarContadorCarrito() {
    document.getElementById('contador-carrito').textContent = carrito.length;
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoElemento = document.getElementById('total-carrito');

    listaCarrito.innerHTML = carrito.map(producto => `
        <li>
            <span>${producto.nombre}</span>
            <span class="precio">$${producto.precio.toFixed(2)}</span>
        </li>
    `).join('');

    totalCarritoElemento.textContent = totalCarrito.toFixed(2);
    actualizarContadorCarrito();
}

function comprar() {
    alert("¡Compra realizada con éxito! Gracias por tu compra.");
    
    reiniciarCarrito();
}

function reiniciarCarrito() {
    carrito = [];
    totalCarrito = 0;
    actualizarCarrito();
}

function mostrarCarrito() {
    alert("Mostrar carrito");
}

// Ejemplo de uso:
agregarAlCarrito('Producto 1', 10);
agregarAlCarrito('Producto 2', 20);
