// Recuperar el carrito (si no existe, devuelve array vacío)
export const getCarritoStorage = () => {
    const carritoGuardado = localStorage.getItem('carritoTechStore');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
};

// Guardar el carrito actualizado
export const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carritoTechStore', JSON.stringify(carrito));
};