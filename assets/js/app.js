const elements = {
  transition: document.querySelector("#transition"),
  cursor: document.querySelector(".custom-cursor.site-wide"),
  navMenu: document.querySelector(".navigator-design"),
  mainContent: document.querySelector("main"),
};
const hamburger = document.querySelector(".hamburger");
const hamburger_img = document.querySelector("#hamburger-img");
const navMenu = document.querySelector(".navigator-design");
const mainContent = document.querySelector("main");


// CUSTOM CURSOR
if (elements.cursor) {
  const cursorWidth = elements.cursor.offsetWidth;
  const cursorHeight = elements.cursor.offsetHeight;

  // Mouse position state
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  const updateCursor = () => {
    const translateX = mouseX - cursorWidth / 2;
    const translateY = mouseY - cursorHeight / 2;

    elements.cursor.style.transform = `translate(${translateX}px, ${translateY}px)`;

    // Keep the loop going.
    requestAnimationFrame(updateCursor);
  };

  // Start the animation loop.
  requestAnimationFrame(updateCursor);

  // --- Cursor State Changes ---
  // Using event delegation on the body is slightly more efficient.
  document.body.addEventListener('mousedown', () => {
    elements.cursor.classList.add("active");
  });

  document.body.addEventListener('mouseup', () => {
    elements.cursor.classList.remove("active");
  });

  // These can be useful for styling the cursor during native drag operations.
  document.addEventListener('dragstart', () => {
    elements.cursor.classList.add('dragging');
  });

  document.addEventListener('dragend', () => {
    elements.cursor.classList.remove('dragging');
  });
}


if (hamburger) {
  const GIF_ANIMATION_DURATION = 2000;

  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    const isActive = hamburger.classList.contains("active");

    const gifSource = isActive ? "/assets/img/hamburger-forwards.gif" : "/assets/img/hamburger-back.gif";
    if(hamburger_img) {
      hamburger_img.src = `${gifSource}?t=${Date.now()}`;
    }



    if (!isActive && hamburger_img) {
      setTimeout(() => {
        hamburger_img.src = "/assets/img/hamburger.svg";
      }, GIF_ANIMATION_DURATION);
    }
    document.querySelector("main").classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);
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

  //  Konami Code Easter Egg
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        elements.transition.classList.add("active");
        setTimeout(() => {
          window.location.href = "https://lyszt.github.io/memorial";
        }, 1000);
        konamiIndex = 0;
      }
    } else {
      // Reset if the wrong key is pressed.
      konamiIndex = 0;
    }
  });
}
