// js/funcionesCarrito.js
import { guardarCarritoStorage } from './storage.js';
import { actualizarContadorUI, renderizarTablaCarrito } from './ui.js';

let carrito = [];

// Inicializar el carrito local con lo que venga del storage
export const setCarritoGlobal = (carritoStorage) => {
    carrito = carritoStorage;
    actualizarContador();
};

export const agregarProducto = (producto) => {
    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarYActualizar();
    alert("Producto agregado al carrito");
};

export const eliminarProducto = (id) => {
    carrito = carrito.filter(item => item.id != id); // Usamos != por si el tipo de dato varía (string vs number)
    guardarYActualizar();
};

export const cambiarCantidad = (id, nuevaCantidad) => {
    const item = carrito.find(p => p.id == id);
    if (item && nuevaCantidad > 0) {
        item.cantidad = parseInt(nuevaCantidad);
        guardarYActualizar();
    }
};

export const vaciarCarrito = () => {
    carrito = [];
    guardarYActualizar();
};

// Función auxiliar privada para actualizar todo tras un cambio
const guardarYActualizar = () => {
    guardarCarritoStorage(carrito);
    actualizarContador();
    // Si estamos en la página del carrito, re-renderizar la tabla
    if (document.getElementById('cart-page')) {
        renderizarTablaCarrito(carrito);
    }
};

const actualizarContador = () => {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    actualizarContadorUI(totalItems);
};