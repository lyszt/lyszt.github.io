// GSAP loaded via CDN in HTML
const elements = {
  transition: document.querySelector("#transition"),
  cursor: document.querySelector(".custom-cursor.site-wide"),
};

// CUSTOM CURSOR - Optimized with GSAP
if (elements.cursor) {
  const cursor = elements.cursor;
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;
  
  const pos = { x: 0, y: 0 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(cursor, "x", "px");
  const ySet = gsap.quickSetter(cursor, "y", "px");

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX - cursorWidth / 2;
    mouse.y = e.clientY - cursorHeight / 2;
  }, { passive: true });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });

  // Cursor state changes
  document.body.addEventListener('mousedown', () => cursor.classList.add("active"), { passive: true });
  document.body.addEventListener('mouseup', () => cursor.classList.remove("active"), { passive: true });
  document.addEventListener('dragstart', () => cursor.classList.add('dragging'), { passive: true });
  document.addEventListener('dragend', () => cursor.classList.remove('dragging'), { passive: true });
}


if (elements.transition) {
  window.addEventListener("beforeunload", () => {
    elements.transition.classList.add("active");
  });

  elements.transition.addEventListener("transitionend", () => {
    if (elements.transition.classList.contains("active")) {
      elements.transition.classList.remove("active");
    }
  });
}
