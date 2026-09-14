# Propuesta de rediseño — Mundiofertas

Tres archivos, sin dependencias. Se abren en cualquier navegador.

| Archivo | Qué es | Para quién |
|---|---|---|
| `index.html` | Propuesta comercial | El cliente |
| `demo.html` | Página de prueba navegable | El cliente |
| `informe-tecnico.html` | Diagnóstico y detalle técnico completo | Uso interno |

El botón de la propuesta enlaza a `demo.html`, así que los tres deben quedar en la misma carpeta.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo, público, por ejemplo `mundiofertas-propuesta`.
2. Subir los cuatro archivos de esta carpeta a la raíz del repositorio.
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
