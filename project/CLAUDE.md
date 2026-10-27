# Byron Bay — contexto del proyecto

Marca de ropa uruguaya (Instagram + futura tienda web). Este proyecto tiene la identidad, logos, historias, posts del feed, destacadas y una landing de referencia.

## Productos y nombres
- **Buzo / crew neck** (sin capucha): beige, cacao, gris, negro.
- **Hoodie / canguro** (con capucha): cacao, gris, negro.
- Próximamente: remeras y otros productos. Por eso la bio/copy habla de "ropa" en general, no solo de buzos.
- **No mostrar precios** hasta que la web esté lista.
- Bordado tono sobre tono (no estampado). Corte oversize. Talles S y M.

## Tono y temporada
- Español rioplatense (vos, deslizá, mandanos).
- Hemisferio sur: ahora es **primavera** (no invierno ni verano). Usar referencias a tardes/noches frescas, mar, brisa.
- Copy corto, sin emojis.

## Estilo visual
- Fuentes: Anton (titulares), DM Mono (etiquetas/datos), Mr Dafoe (firma/logo).
- Colores: arena #F4EFE7, arena oscuro #E6DACB, piedra #B9AE9F, negro #161412, cacao (ver logos).
- Fotos de producto en `productos/`.

## Archivos
- `Byron Bay Marca e Historias.dc.html` — board principal: marca, historias, posts del feed, sorteo, talles, landing, consejos.
- `Byron Bay Logos.dc.html` — logos sueltos para foto de perfil (PNG en `logos/`).
- `Byron Bay Destacadas.dc.html` — portadas de destacadas (3 estilos en `destacadas/`).
- `historias/` (1080×1920) y `feed/` (1080×1350) — PNG ya exportados.

## Reglas técnicas para exportar (importante)
- Historias y posts con esquinas **rectas** (Instagram redondea solo).
- Cada pieza debe ser **un solo elemento/imagen**. Si se arma con varias fotos superpuestas, la descarga sale dividida o en negro: aplanar la composición a un JPG y mostrarlo dentro de un div contenedor con un id.
- Exportar a 3x para obtener 1080 px de ancho.

## Guía de talles (cm, prenda en plano)
- Buzo S: ancho 59, largo 67, manga 74, hombros 20 · M: 61, 70, 79, 22
- Canguro S: ancho 58, largo 68, manga 72, hombros 19 · M: 62, 70, 70, 19
- Pendiente confirmar: hombros (parecen medio hombro) y manga del canguro M (menor que S). La tabla de la landing aún tiene medidas viejas.
- Carrusel de talles: `feed/talles-1-portada.png` → `talles-2-buzo.png` → `talles-3-canguro.png`.

## Pendientes
- Testimonios: agregar screenshots reales en el carrusel "Lo que dicen nuestros clientes".
- Actualizar tabla de talles de la landing.
- Diseñar piezas de remeras cuando lleguen.
