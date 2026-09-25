# Propuesta de rediseño — Mundiofertas

Tres páginas HTML y la carpeta `assets/`, sin dependencias de compilación. Se abren en cualquier navegador.

| Archivo | Qué es | Para quién |
|---|---|---|
| `index.html` | Propuesta comercial | El cliente |
| `demo.html` | Página de prueba navegable | El cliente |
| `informe-tecnico.html` | Diagnóstico y detalle técnico completo | Uso interno |

El botón de la propuesta enlaza a `demo.html`, así que los tres deben quedar en la misma carpeta.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo, público, por ejemplo `mundiofertas-propuesta`.
2. Subir los archivos HTML, README y la carpeta `assets/` a la raíz del repositorio.
3. Entrar a **Settings → Pages**.
4. En *Source* elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guardar.
5. Esperar dos o tres minutos. La dirección queda así:

```
https://USUARIO.github.io/mundiofertas-propuesta/
```

Esa es la que se manda por WhatsApp. Abre directo la propuesta, y desde ahí el cliente entra a la página de prueba.

## Alternativa sin repositorio

Arrastrar esta carpeta a [app.netlify.com/drop](https://app.netlify.com/drop). Devuelve un enlace al instante, sin crear cuenta.

## Notas

- Las fotos de producto y el logo se cargan desde `mundiofertas.net`. Si ese servidor bloquea el enlace desde otro dominio, las imágenes no aparecen: en ese caso hay que descargarlas y subirlas junto con los archivos.
- Los tres archivos llevan `noindex`, así que no salen en Google mientras la propuesta esté en revisión.
- La vista previa de WhatsApp ya está configurada: al pegar el enlace muestra el logo de Mundiofertas con título y descripción.
- `demo.html` es una maqueta de diseño. El pago con Ficopago, la búsqueda y los botones de WhatsApp muestran un aviso en lugar de ejecutar la acción real.

## Portada azul y blanca

La tienda de demostración está en `demo.html`. Su portada usa el logo local en `assets/logo.png`, estilos en `assets/storefront.css` y carruseles en `assets/storefront.js`. Conservar esa carpeta al publicar. Los carruseles admiten flechas, teclado y desplazamiento táctil, sin rotación automática.

Para revisar localmente: `python3 -m http.server 8765` y abrir `http://localhost:8765/demo.html`.

## Historia y ubicaciones

La historia se basa en https://www.mundiofertas.net/Sobre-Nosotros/ (1989, 1995, 2015 y actualidad). El mapa usa Leaflet 1.9.4, incluido con su licencia en `assets/leaflet/`, y mosaicos de OpenStreetMap con atribución visible. Requiere conexión para cargar los mosaicos; los enlaces de las tiendas permanecen disponibles.

San Pedro Sula usa las coordenadas del enlace oficial. Villanueva y Choloma tienen marcadores aproximados señalados como demo; las direcciones de las tres tarjetas siguen la referencia proporcionada. Los enlaces de Villanueva y San Pedro Sula son los del sitio oficial; Choloma abre una búsqueda en Google Maps. Confirmar sus coordenadas antes de usar el mapa como localizador definitivo.

## Navegación y presentación

- `historia.html` presenta la historia, trayectoria, misión y valores en una página independiente; sus enlaces desde la demo abren una pestaña nueva.
- Categorías: 11 grupos y 40 subcategorías tomados del menú oficial el 23/09/2026. `assets/categories.json` conserva nombres y URLs de origen, incluidos nombres repetidos con destinos distintos. Los enlaces abren la tienda oficial en otra pestaña. Menús desplegables disponibles en escritorio, móvil y la sección de categorías.
- Carrusel principal: avance cada 6 segundos, pausa/reanudación, pausa al interactuar o pasar el cursor; respeta movimiento reducido y no avanza cuando está fuera de pantalla o la pestaña está oculta.
- Logos de marcas ampliados, a color, con adaptación a celular.

## Diseño de referencia — 25 de septiembre

Portada adaptada a la referencia del cliente: banner completo con rotación cada seis segundos, beneficios, siete categorías visuales, tres ofertas por fila en escritorio, dos promociones, marcas y mapa compacto. El carrito, categorías desplegables e historia independiente se conservan. Las fotos de producto proceden del catálogo oficial; no se inventan fotos de sucursales.

Estilos: `assets/reference-layout.css`. Fondo generado con la herramienta integrada ImageGen: `assets/hero-tropical.png`. Prompt: “Photorealistic wide 3:1 website banner background. Modern bright tropical Honduran home, pale stone floor, tall glass windows on right revealing palms and blue sky. Left 45 percent deep ocean blue wall, empty space for white text. Right 55 percent sunlit neutral architecture, empty floor for real appliance overlays. Blue and white palette. No text, logos, appliances or people.”

Validación: inspección visual de escritorio y móvil de 390 px, sin desbordamientos ni imágenes rotas; agregar al carrito y menú móvil comprobados; validación sintáctica de JavaScript.
