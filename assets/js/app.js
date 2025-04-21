// CONSTANTS
const transition_anim = document.querySelector("#transition");

// CURSOR
const site_wide_cursor = document.querySelector(".custom-cursor.site-wide");
let mouseX = 0, mouseY = 0;
let isCursorVisible = false;

const updateCursorPosition = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};

const renderCursor = () => {
  site_wide_cursor.style.transform = `translate(${mouseX - site_wide_cursor.offsetWidth / 2}px, ${mouseY - site_wide_cursor.offsetHeight / 2}px)`;
  requestAnimationFrame(renderCursor);
};

// Optimize mouse events by limiting unnecessary updates
document.addEventListener('mouseover', () => {
  if (!isCursorVisible) {
    site_wide_cursor.style.display = 'block';
    isCursorVisible = true;
  }
});

document.addEventListener('mouseout', () => {
  if (isCursorVisible) {
    site_wide_cursor.style.display = 'none';
    isCursorVisible = false;
  }
});

document.addEventListener('mousemove', updateCursorPosition);

// Start cursor render loop
requestAnimationFrame(renderCursor);

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
