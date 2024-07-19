

// Hamburger menu stuff

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigator-design")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})


// Menu item interactions on portfolio pick

const port_title = document.querySelector(".port-title")
const photography_button = document.querySelector("#port-photography")
const videography_button = document.querySelector("#port-video")
const design_button = document.querySelector("#port-web")
const code_button = document.querySelector("#port-code")

const photo_folder = document.querySelector("#photography-folder")
const video_folder = document.querySelector("#video-folder")
const design_folder = document.querySelector("#web-folder")
const code_folder = document.querySelector("#code-folder")


photography_button.addEventListener("click", () => {
  photo_folder.classList.remove("hidden")
  video_folder.classList.add("hidden")
  design_folder.classList.add("hidden")
  code_folder.classList.add("hidden")

  code_button.classList.remove("focus")
  photography_button.classList.add("focus")
  design_button.classList.remove("focus")
  videography_button.classList.remove("focus")
})
videography_button.addEventListener("click", () => {
  video_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  design_folder.classList.add("hidden")
  code_folder.classList.add("hidden")

  code_button.classList.remove("focus")
  photography_button.classList.remove("focus")
  design_button.classList.remove("focus")
  videography_button.classList.add("focus")
})
design_button.addEventListener("click", () => {
  design_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  video_folder.classList.add("hidden")
  code_folder.classList.add("hidden")

  code_button.classList.remove("focus")
  photography_button.classList.remove("focus")
  design_button.classList.add("focus")
  videography_button.classList.remove("focus")
})
code_button.addEventListener("click", () => {
  code_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  video_folder.classList.add("hidden")
  design_folder.classList.add("hidden")

  code_button.classList.add("focus")
  photography_button.classList.remove("focus")
  design_button.classList.remove("focus")
  videography_button.classList.remove("focus")
})


// On document read make preparations
addEventListener("DOMContentLoaded", () => {
  design_folder.classList.remove("hidden");
  design_button.classList.add("focus")
})

// Anchors

const arrow_down_landing = document.querySelector("#arrow-down");
const portfolio_section = document.querySelector(".pick-portfolio")
arrow_down_landing.addEventListener("click", () => {
  portfolio_section.scrollIntoView()
})
