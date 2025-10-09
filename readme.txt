El objetivo principal de este proyecto fue crear una estructura de sitio web de dos páginas, garantizando la uniformidad de estilos, tipografía y paleta de colores en todo el frontend, y haciendo uso de técnicas avanzadas de maquetación para asegurar una experiencia de usuario óptima en cualquier dispositivo.

🛠️ Tecnologías Utilizadas
HTML5: Estructura semántica de todo el contenido.

CSS3: Estilos completos, incluyendo transiciones y efectos hover.

Google Fonts: Utilización de las tipografías Oswald (títulos) y Roboto (cuerpo de texto) para consistencia visual.

Flexbox: Utilizado en la navegación (header) y en la sección de productos (index.html) para crear las tres tarjetas por fila responsivas.

CSS Grid: Utilizado en la sección de reseñas (index.html) para organizar contenido en un layout de cuadrícula.

Formspree: Backendless para la funcionalidad de envío del formulario de contacto.

📂 Estructura del Proyecto
El proyecto se compone de dos páginas principales:

1. index.html (Inicio)
Header y Footer: Consistentes con el diseño de la tienda.

Sección Promociones: Muestra 9 productos organizados en tres tarjetas por fila utilizando Flexbox, con precios tachados y de oferta.

Sección Multimedia: Incluye un video de YouTube integrado mediante un iframe responsivo que se adapta al tamaño de la pantalla.

Sección Reseñas: Presenta testimonios de clientes organizados en un Grid responsivo.

2. contacto.html (Contacto)
Ubicación Física: Breve descripción e integración de un mapa de Google mediante un iframe para mostrar la localización de la tienda. El mapa es completamente responsivo.

Formulario de Contacto:

Diseñado con Flexbox para presentar los campos en dos columnas en escritorio.

Totalmente responsivo, pasando automáticamente a una sola columna en dispositivos móviles (usando Media Queries).

Funcionalidad de envío habilitada a través de Formspree.

✅ Responsividad (Media Queries)
El diseño está optimizado para tres puntos de quiebre principales:

Dispositivo	Ancho Máximo	Comportamiento
Escritorio	( > 992px )	3 tarjetas de producto, 3 columnas de reseñas, Formulario de 2 columnas.
Tableta	( < 992px )	2 tarjetas de producto por fila.
Móvil	( < 650px )	Menú de navegación vertical, 1 tarjeta/reseña por fila, Formulario de 1 columna.