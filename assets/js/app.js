
// CONSTANTS
const transition_anim = document.querySelector("#transition");

// Hamburger menu stuff
const hamburger = document.querySelector(".hamburger");
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


// THREE.JS

function render() {
  const canvas = document.querySelector("#landing-canvas");
  const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true, canvas});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix()
  camera.position.z = 5;
  camera.position.x = 2;
  camera.position.y = 1;

  const scene = new THREE.Scene();
  const boxWidth = 1;
  const boxHeight = 4;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshStandardMaterial({color: 0xc2c2c2});
  const cubes = []
  const spacing = 1.2;

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);
  const light = new THREE.DirectionalLight(0xffffff);
  light.position.set(10,10,10)
  scene.add(light);

  for(let i = 4; i < 8; i++){
    let cube = new THREE.Mesh(geometry, material);
    cube.position.z = 1;
    cube.position.x = i * spacing;
    cube.position.y = 1;
    cube.rotation.x += 0.01;
    cube.rotation.z += 0;
    cubes.push(cube);
    scene.add(cube);
  }
  renderer.render(scene, camera);
}
render();
