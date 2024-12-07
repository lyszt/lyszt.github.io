// CONSTANTS
const transition_anim = document.querySelector("#transition");

// Hamburger menu stuff
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigator-design");

// Portfolio item buttons
const photography_button = document.querySelector("#port-photography");
const videography_button = document.querySelector("#port-video");
const design_button = document.querySelector("#port-web");
const code_button = document.querySelector("#port-code");

// Portfolio folders
const photo_folder = document.querySelector("#photography-folder");
const video_folder = document.querySelector("#video-folder");
const design_folder = document.querySelector("#web-folder");
const code_folder = document.querySelector("#code-folder");

// Hamburger menu toggle
if (hamburger !== null) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Transition animation on page leave (beforeunload event)
window.addEventListener("beforeunload", (event) => {
  transition_anim.classList.add("active");
});

// Undo transition animation when coming back (pageshow event)
window.addEventListener("pageshow", (event) => {
  // Check if it's a back navigation (if the event is triggered by the back button)
  if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
    transition_anim.classList.remove("active");
  }
});

// Portfolio item button interactions (same as before)
photography_button.addEventListener("click", () => {
  photo_folder.classList.remove("hidden");
  video_folder.classList.add("hidden");
  design_folder.classList.add("hidden");
  code_folder.classList.add("hidden");

  code_button.classList.remove("focus");
  photography_button.classList.add("focus");
  design_button.classList.remove("focus");
  videography_button.classList.remove("focus");
});

videography_button.addEventListener("click", () => {
  video_folder.classList.remove("hidden");
  photo_folder.classList.add("hidden");
  design_folder.classList.add("hidden");
  code_folder.classList.add("hidden");

  code_button.classList.remove("focus");
  photography_button.classList.remove("focus");
  design_button.classList.remove("focus");
  videography_button.classList.add("focus");
});

design_button.addEventListener("click", () => {
  design_folder.classList.remove("hidden");
  photo_folder.classList.add("hidden");
  video_folder.classList.add("hidden");
  code_folder.classList.add("hidden");

  code_button.classList.remove("focus");
  photography_button.classList.remove("focus");
  design_button.classList.add("focus");
  videography_button.classList.remove("focus");
});

code_button.addEventListener("click", () => {
  code_folder.classList.remove("hidden");
  photo_folder.classList.add("hidden");
  video_folder.classList.add("hidden");
  design_folder.classList.add("hidden");

  code_button.classList.add("focus");
  photography_button.classList.remove("focus");
  design_button.classList.remove("focus");
  videography_button.classList.remove("focus");
});

// On document load, make preparations for Portfolio
addEventListener("DOMContentLoaded", () => {
  design_folder.classList.remove("hidden");
  design_button.classList.add("focus");

  // Landing page loop animations
  let timer = 10000;
  const background = document.querySelector(".landing-page");
  let interval;

  function InvertLandingColours() {
    background.classList.add("altered");
    clearTimeout(interval);
    interval = setTimeout(NormalLandingColours, timer);
  }

  function NormalLandingColours() {
    background.classList.remove("altered");
    clearTimeout(interval);
    interval = setTimeout(InvertLandingColours, timer);
  }

  interval = setTimeout(InvertLandingColours, timer); // Leave it at 1000 so user can see transition
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
  const key = event.key;
  if (key === konamiCode[index]) {
    index++;
  }

  if (index === konamiCode.length) {
    transition_anim.classList.add("active");
    setTimeout(() => {
      window.location.href = "https://lyszt.github.io/memorial";
    }, 1000);

    index = 0;
  }
});
