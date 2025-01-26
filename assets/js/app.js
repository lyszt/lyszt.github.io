
// CONSTANTS
const transition_anim = document.querySelector("#transition");

// Hamburger menu stuff
const hamburger = document.querySelector(".hamburger");
const hamburger_img = document.querySelector("#hamburger-img")
const navMenu = document.querySelector(".navigator-design");


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

// On document load make preparations for Portfolio
addEventListener("DOMContentLoaded", () => {
  if(transition_anim.classList.contains("active")){
    transition_anim.classList.remove("active");
  }

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

