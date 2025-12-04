// Renderiza las tarjetas de productos en el index
export const renderizarProductosIndex = (productos) => {
    const contenedor = document.querySelector('.product-list');
    if (!contenedor) return;

    contenedor.innerHTML = ''; // Limpiar contenido previo

    productos.forEach(producto => {
        // Simulamos un precio de oferta para la consigna (15% desc)
        const precioOferta = (producto.price * 0.85).toFixed(2);
        
        const html = `
            <li class="product-card">
                <a href="#" onclick="return false;">
                    <img src="${producto.image}" alt="${producto.title}" loading="lazy">
                    <h3>${producto.title}</h3>
                    <p class="old-price">Precio Anterior: <span>$${producto.price}</span></p>
                    <p class="current-price">Precio Oferta: $${precioOferta}</p>
                    <button class="add-to-cart-btn" 
                        data-id="${producto.id}"
                        data-title="${producto.title}"
                        data-price="${precioOferta}"
                        data-img="${producto.image}"
                    >Agregar al Carrito</button>
                </a>
            </li>
        `;
        contenedor.innerHTML += html;
    });
};

// Actualiza el contador del carrito en el header
export const actualizarContadorUI = (cantidad) => {
    const contadores = document.querySelectorAll('.cart-count');
    contadores.forEach(span => span.textContent = cantidad);
};

// Renderiza la tabla del carrito en cart.html
export const renderizarTablaCarrito = (carrito) => {
    const tbody = document.getElementById('productos-carrito-tbody');
    const containerLleno = document.getElementById('carrito-lleno-container');
    const msgVacio = document.getElementById('carrito-vacio-msg');
    const totalSpan = document.getElementById('total-carrito');

    if (!tbody) return; // Si no estamos en la pagina del carrito, salimoss

    if (carrito.length === 0) {
        containerLleno.style.display = 'none';
        msgVacio.style.display = 'block';
        return;
    }

    // Mostrar tabla y ocultar mensaje de vacio
    containerLleno.style.display = 'block';
    msgVacio.style.display = 'none';
    tbody.innerHTML = '';

    let totalGlobal = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        totalGlobal += subtotal;

        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img src="${item.imagen}" alt="${item.nombre}">
                ${item.nombre}
            </td>
            <td>$${item.precio}</td>
            <td>
                <input type="number" class="input-cantidad" data-id="${item.id}" value="${item.cantidad}" min="1">
            </td>
            <td>$${subtotal.toFixed(2)}</td>
            <td>
                <button class="btn-eliminar-item" data-id="${item.id}">❌</button>
            </td>
        `;
        tbody.appendChild(fila);
    });

    totalSpan.textContent = `$${totalGlobal.toFixed(2)}`;
};