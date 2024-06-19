
// Hamburger menu stuff

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigator-design")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

// Menu item interactions on portfolio pick

const port_item = document.QuerySelector(".port-option");
const port_img = document.QuerySelector(".port-option img")
const port_btn = document.QuerySelector(".port-option a h3")
port_item.addEventListener("hover", () => {
  port_img.classList.toggle("hover");
  port_btn.classList.toggle("hover");
})
