// CONSTANTS
const transition_anim = document.querySelector("#transition");

// CURSOR
const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");
// Cache initial cursor dimensions to avoid layout thrashing
const cursorWidth = site_wide_cursor.offsetWidth;
const cursorHeight = site_wide_cursor.offsetHeight;

let mouseX = 0;
let mouseY = 0;
let isCursorVisible = false;
let animationFrameId; // For requestAnimationFrame throttling

// Optimized position updater with animation frame throttling
const updateCursorPosition = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(() => {
      site_wide_cursor.style.transform =
        `translate(${mouseX - cursorWidth/2}px, ${mouseY - cursorHeight/2}px)`;
      animationFrameId = null;
    });
  }
};

// Cursor visibility handlers (fixed logic)
document.addEventListener('mouseenter', () => {
  if (!isCursorVisible) {
    site_wide_cursor.style.display = 'block';
    isCursorVisible = true;
  }
});

document.addEventListener('mouseleave', () => {
  if (isCursorVisible) {
    site_wide_cursor.style.display = 'none';
    isCursorVisible = false;
  }
});

// Interaction states using CSS classes
document.addEventListener('mousedown', () => {
  site_wide_cursor.classList.add("active");
});

document.addEventListener('mouseup', () => {
  site_wide_cursor.classList.remove("active");
});

// Hover effect using event delegation and CSS classes
const handleHover = (e) => {
  const hasInteractiveElement = e.target.closest('button, a, [data-cursor-hover]');
  site_wide_cursor.classList.toggle('hovering', !!hasInteractiveElement);
};

document.addEventListener('mouseover', handleHover);
document.addEventListener('mouseout', handleHover);

// Optimized mouse move listener
document.addEventListener('mousemove', updateCursorPosition, { passive: true });

// Hamburger menu stuff
const hamburger = document.querySelector(".hamburger");
const hamburger_img = document.querySelector("#hamburger-img");
const navMenu = document.querySelector(".navigator-design");

if (hamburger !== null) {
  // Hamburger menu toggle
  const toggleMenu = () => {
    const isActive = hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    const gifSource = isActive ? "/assets/img/hamburger-forwards.gif" : "/assets/img/hamburger-back.gif";
    hamburger_img.src = `${gifSource}?t=${Date.now()}`;

    if (!isActive) {
      // Change to SVG after the GIF has finished playing
      setTimeout(() => {
        hamburger_img.src = "/assets/img/hamburger.svg";
      }, 2000);
    }

    document.querySelector("main").classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);
}

// Transition animation before page unload
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
