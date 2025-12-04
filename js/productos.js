export const obtenerProductos = async () => {
    try {
        const response = await fetch('./data/productos.json');
        
        if (!response.ok) {
            throw new Error('Error al cargar productos');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return []; // Retorna array vacio en caso de error para no romper la app
    }
};