// CONSTANTS
const transition_anim = document.querySelector("#transition");

// CURSOR
const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");
const hamburger = document.querySelector(".hamburger");
const hamburger_img = document.querySelector("#hamburger-img");
const navMenu = document.querySelector(".navigator-design");
const main_content = document.querySelector("main");


if (site_wide_cursor) {
  const cursorWidth = site_wide_cursor.offsetWidth;
  const cursorHeight = site_wide_cursor.offsetHeight;
  let mouseX = 0;
  let mouseY = 0;
  let isDragging = false; // New drag state flag

  const updateCursor = () => {
    const translateX = mouseX - cursorWidth / 2;
    const translateY = mouseY - cursorHeight / 2;
    site_wide_cursor.style.transform = `translate(${translateX}px, ${translateY}px)`;
    requestAnimationFrame(updateCursor);
  };

  // Start continuous render loop
  requestAnimationFrame(updateCursor);

  // Drag state detection
  document.addEventListener('dragstart', () => {
    isDragging = true;
    site_wide_cursor.classList.add('dragging');
  });

  document.addEventListener('dragend', () => {
    isDragging = false;
    site_wide_cursor.classList.remove('dragging');
  });

  // Optimized mouse move handler
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Interaction states using CSS classes
  document.addEventListener('mousedown', () => {
    site_wide_cursor.classList.add("active");
  });

  document.addEventListener('mouseup', () => {
    site_wide_cursor.classList.remove("active");
  });
}

// Hamburger menu stuff
if (hamburger && navMenu && main_content) {
  // Hamburger menu toggle
  const toggleMenu = () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    main_content.classList.toggle("active");

    const gifSource = isActive ? "/assets/img/hamburger-forwards.gif" : "/assets/img/hamburger-back.gif";
    hamburger_img.src = `${gifSource}?t=${Date.now()}`;

    if (!isActive) {
      // Change to SVG after the GIF has finished playing
      setTimeout(() => {
        hamburger_img.src = "/assets/img/hamburger.svg";
      }, 2000);
    }
  };

  hamburger.addEventListener("click", toggleMenu);
}

// Transition animation before page unload
if (transition_anim) {
  window.addEventListener("beforeunload", () => {
    transition_anim.classList.add("active");
  });

  transition_anim.addEventListener("transitionend", () => {
    transition_anim.classList.remove("active");
  });

  // Konami Code Easter Egg
  const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];
  let index = 0;

  document.addEventListener('keydown', (event) => {
    if (event.key === konamiCode[index]) {
      index++;
      if (index === konamiCode.length) {
        transition_anim.classList.add("active");
        setTimeout(() => {
          window.location.href = "https://lyszt.github.io/memorial";
        }, 1000);
        index = 0;
      }
    } else {
      index = 0; // Reset on wrong key
    }
  });
}
