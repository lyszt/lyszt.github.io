
// CONSTANTS
const transition_anim = document.querySelector("#transition");

// Hamburger menu stuff
const hamburger = document.querySelector(".hamburger");
const hamburger_img = document.querySelector("#hamburger-img")
const navMenu = document.querySelector(".navigator-design");

// Portfolio item buttons
const port_title = document.querySelector(".port-title");
const photography_button = document.querySelector("#port-photography");
const videography_button = document.querySelector("#port-video");
const design_button = document.querySelector("#port-web");
const code_button = document.querySelector("#port-code");

// Portfolio folders
const photo_folder = document.querySelector("#photography-folder");
const video_folder = document.querySelector("#video-folder");
const design_folder = document.querySelector("#web-folder");
const code_folder = document.querySelector("#code-folder");

if(hamburger !== null) {
// Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
      // Add a unique query parameter to bypass caching
      hamburger_img.src = `/assets/img/hamburger-forwards.gif?t=${Date.now()}`;

    } else {
      // Add a unique query parameter to bypass caching
      hamburger_img.src = `/assets/img/hamburger-back.gif?t=${Date.now()}`;

      // Change to SVG after the GIF has finished playing
      setTimeout(() => {
        hamburger_img.src = "/assets/img/hamburger.svg";
      }, 2000);
    }

    document.querySelector("main").classList.toggle("active");
  });


}
// Trigger transition animation before leaving the page
window.addEventListener("beforeunload", () => {
  transition_anim.classList.add("active");
});
transition_anim.addEventListener("transitionend", () => {
  transition_anim.classList.remove("active");
});

// Menu item interactions on portfolio pick
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

// On document load make preparations for Portfolio
addEventListener("DOMContentLoaded", () => {
  if(transition_anim.classList.contains("active")){
    transition_anim.classList.remove("active");
  }
  code_folder.classList.remove("hidden");
  code_folder.classList.add("focus");

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

