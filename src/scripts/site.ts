// Shared client behaviour for Restoration Medical — identical to the
// Medical Aesthetics and Infusion Therapy sites so the whole property feels
// like one practice: reveal-on-scroll, a trailing droplet cursor, ripple text,
// the treatments mega-menu, and the mobile drawer.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

function revealOnScroll() {
  const els = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    els.forEach((t) => t.classList.add('is-in'));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          obs.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  els.forEach((t) => obs.observe(t));
}

function dropletCursor() {
  if (reduceMotion || !finePointer) return;
  const dot = document.createElement('div');
  dot.className = 'droplet';
  document.body.appendChild(dot);
  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;
  let shown = false;
  window.addEventListener('pointermove', (ev) => {
    if (ev.pointerType !== 'mouse') return;
    tx = ev.clientX;
    ty = ev.clientY;
    if (!shown) {
      shown = true;
      dot.style.opacity = '0.9';
    }
    const over = (ev.target as Element | null)?.closest(
      'a, button, .card, .concern, input, select, textarea'
    );
    dot.style.width = over ? '30px' : '14px';
    dot.style.height = over ? '30px' : '14px';
  });
  const loop = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

function rippleText() {
  if (reduceMotion || !finePointer) return;
  document.querySelectorAll<HTMLElement>('.ripple').forEach((el) => {
    if (!el.dataset.split) {
      const text = el.textContent ?? '';
      el.textContent = '';
      for (const ch of text) {
        const span = document.createElement('span');
        span.textContent = ch;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform';
        if (ch === ' ') span.style.width = '0.32em';
        el.appendChild(span);
      }
      el.dataset.split = 'true';
    }
    const spans = Array.from(el.querySelectorAll<HTMLElement>('span'));
    el.addEventListener('pointermove', (ev) => {
      const rect = el.getBoundingClientRect();
      const px = ev.clientX - rect.left;
      const py = ev.clientY - rect.top;
      for (const span of spans) {
        const cx = span.offsetLeft + span.offsetWidth / 2;
        const cy = span.offsetTop + span.offsetHeight / 2;
        const dist = Math.hypot(px - cx, py - cy);
        const lift = Math.max(0, 1 - dist / 140);
        span.style.transform = `translateY(${-lift * 10}px) scale(${1 + lift * 0.06})`;
      }
    });
    el.addEventListener('pointerleave', () => {
      spans.forEach((s) => (s.style.transform = ''));
    });
  });
}

function dropdowns() {
  document.querySelectorAll<HTMLElement>('[data-dropdown]').forEach((trigger) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls') || '');
    if (!panel) return;
    const open = () => {
      panel.hidden = false;
      trigger.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    };
    const close = () => {
      panel.hidden = true;
      trigger.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      panel.hidden ? open() : close();
    });
    const nav = trigger.closest('.nav');
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      trigger.addEventListener('mouseenter', open);
      nav?.addEventListener('mouseleave', close);
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    document.addEventListener('click', (e) => {
      const t = e.target as Node;
      if (!trigger.contains(t) && !panel.contains(t)) close();
    });
  });
}

function mobileMenu() {
  const burger = document.querySelector<HTMLElement>('[data-burger]');
  const menu = document.getElementById('mobile-menu');
  const scrim = document.querySelector<HTMLElement>('[data-mobile-scrim]');
  if (!burger || !menu) return;
  const set = (open: boolean) => {
    menu.hidden = !open;
    if (scrim) scrim.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => set(menu.hidden));
  scrim?.addEventListener('click', () => set(false));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
}

function brandMode() {
  const btn = document.querySelector('[data-theme-toggle]');
  btn?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
}

document.addEventListener('DOMContentLoaded', () => {
  revealOnScroll();
  dropletCursor();
  rippleText();
});
dropdowns();
mobileMenu();
brandMode();
