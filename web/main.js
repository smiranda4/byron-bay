// Datos de contacto: completar con los reales.
const WHATSAPP_NUMBER = ''; // Formato internacional sin "+", ej. "59899123456"
const WHATSAPP_TEXT = 'Hola! Quería hacer un pedido.';
const INSTAGRAM_URL = 'https://www.instagram.com/byronbay.uy/';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  } else {
    // Sin número todavía: mandamos al DM de Instagram.
    link.href = INSTAGRAM_URL;
  }
  link.target = '_blank';
  link.rel = 'noopener';
});

document.querySelectorAll('[data-instagram]').forEach((link) => {
  link.href = INSTAGRAM_URL;
  link.target = '_blank';
  link.rel = 'noopener';
});

// Menú del celular
const nav = document.querySelector('.nav');
const burger = document.querySelector('.nav__burger');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
document.querySelectorAll('.nav__links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
  });
});

// Filtros de la colección
const chips = document.querySelectorAll('.chip');
const products = document.querySelectorAll('.product');

function applyFilter(filter) {
  chips.forEach((chip) => {
    const active = chip.dataset.filter === filter;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  products.forEach((product) => {
    product.hidden = filter !== 'all' && product.dataset.type !== filter;
  });
}

chips.forEach((chip) => chip.addEventListener('click', () => applyFilter(chip.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach((link) => {
  link.addEventListener('click', () => applyFilter(link.dataset.filterLink));
});

// Colores de cada producto
products.forEach((product) => {
  const img = product.querySelector('.product__media img');
  const label = product.querySelector('[data-color-label]');
  const name = product.querySelector('.product__name strong').textContent;
  const swatches = product.querySelectorAll('.swatch');

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatches.forEach((s) => {
        s.classList.toggle('is-active', s === swatch);
        s.setAttribute('aria-checked', String(s === swatch));
      });
      img.src = swatch.dataset.img;
      img.alt = `${name} ${swatch.dataset.color}`;
      label.textContent = swatch.dataset.color;
    });
  });
});

// Guía de talles: pestañas Buzo / Canguro
const tabs = document.querySelectorAll('.tab');

function selectTab(tab) {
  tabs.forEach((t) => {
    const active = t === tab;
    t.classList.toggle('is-active', active);
    t.setAttribute('aria-selected', String(active));
    t.tabIndex = active ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
  });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    selectTab(next);
    next.focus();
  });
});

// En el celular la tabla arranca con ancho y largo; el resto se despliega.
const sizes = document.querySelector('.sizes');
const sizesMore = document.querySelector('.sizes__more');
sizesMore.addEventListener('click', () => {
  const expanded = sizes.classList.toggle('is-expanded');
  sizesMore.setAttribute('aria-expanded', String(expanded));
  sizesMore.textContent = expanded ? 'Ver menos ↑' : 'Ver guía completa →';
});
