import { obtenerProductos } from './productos.js';
import { renderizarProductosIndex, renderizarTablaCarrito } from './ui.js';
import { getCarritoStorage } from './storage.js';
import { setCarritoGlobal, agregarProducto, eliminarProducto, cambiarCantidad, vaciarCarrito } from './funcionesCarrito.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    // 1. Inicializar Carrito desde Storage
    const carritoStorage = getCarritoStorage();
    setCarritoGlobal(carritoStorage);

    // 2. Lógica para la página de INICIO (index.html)
    // Verificamos si existe la sección de promociones para saber si estamos en home
    if (document.querySelector('#promociones')) {
        const productos = await obtenerProductos();
        renderizarProductosIndex(productos);
        
        // Evento Delegado: Detectar clicks en botones "Agregar" creados dinámicamente
        const listaProductos = document.querySelector('.product-list');
        listaProductos.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                e.preventDefault();
                const btn = e.target;
                const producto = {
                    id: btn.dataset.id,
                    title: btn.dataset.title, // En la tabla usaremos 'nombre'
                    nombre: btn.dataset.title, // Mapeo simple para consistencia
                    precio: parseFloat(btn.dataset.price),
                    imagen: btn.dataset.img
                };
                agregarProducto(producto);
            }
        });
    }

    // 3. Lógica para la página del CARRITO (cart.html)
    // Verificamos por el ID del body
    if (document.getElementById('cart-page')) {
        renderizarTablaCarrito(carritoStorage);

        // Eventos de la tabla (Delegación)
        const tabla = document.getElementById('tabla-productos-carrito');
        
        tabla.addEventListener('click', (e) => {
            // Eliminar
            if (e.target.classList.contains('btn-eliminar-item')) {
                const id = e.target.dataset.id;
                eliminarProducto(id);
            }
        });

        tabla.addEventListener('change', (e) => {
            // Cambiar cantidad
            if (e.target.classList.contains('input-cantidad')) {
                const id = e.target.dataset.id;
                const valor = e.target.value;
                cambiarCantidad(id, valor);
            }
        });

        // Botón vaciar
        const btnVaciar = document.getElementById('btn-vaciar-carrito');
        if (btnVaciar) {
            btnVaciar.addEventListener('click', () => {
                if(confirm('¿Vaciar carrito?')) vaciarCarrito();
            });
        }

        // Boton de finalizar compraa
        const btnFinalizar = document.getElementById('btn-finalizar-compra');
        if (btnFinalizar) {
            btnFinalizar.addEventListener('click', () => {
                if(carritoStorage.length > 0) {
                    alert('¡Compra realizada con éxito!');
                    vaciarCarrito();
                }
            });
        }
    }
});