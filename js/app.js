

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


// On document load make preparations for Portfolio
addEventListener("DOMContentLoaded", () => {
  design_folder.classList.remove("hidden");
  design_button.classList.add("focus")

  // Landing page loop animations
  let timer = 10000
  const background = document.querySelector(".landing-page");
  let interval;
  function InvertLandingColours() {
    background.classList.add("altered")
    clearTimeout(interval)
    interval = setTimeout(NormalLandingColours,timer)
  }
  function NormalLandingColours(){
    background.classList.remove("altered")
    clearTimeout(interval)
    interval = setTimeout(InvertLandingColours,timer)
  }
  interval = setTimeout(InvertLandingColours,timer) // Leave it at 1000 so user can see transition

  // GeoLocation interactions
  let user_lang = navigator.language
  console.log(user_lang)
  const landing_text = document.querySelector("#landing-text p");
  const flag = document.querySelector(".flag");
  const cv_link = document.querySelector(".cv");
  if(user_lang.startsWith("fr")){
    design_button.lastChild.innerText = "Projets Web"
    code_button.lastChild.innerText = "Projets Logiciels"
    photography_button.lastChild.innerText = "Photographie"
    videography_button.lastChild.innerText = "Videographie"
    landing_text.innerHTML =  "<b>Soyez le bienvenu!</b> Je vous offre ce que vous recherchez."
    cv_link.href = "https://drive.google.com/file/d/1UJTMjMxV83N_CFwpVpyr34CVuklIPgcJ/view?usp=sharing"
    if(user_lang === "fr-CA"){
      flag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg"
      flag.alt = "French-Canadian Flag - Quebec"
    }
  }
  else if(user_lang.startsWith("pt") && user_lang !== "pt-BR"){
    flag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    flag.alt = "Portuguese Flag - Portugal"
    landing_text.innerHTML =  "<b>A simplicidade</b> é o mais alto grau da sofisticação."
  }
  else {
    cv_link.href = "https://drive.google.com/file/d/1FK_yAh3cft7x2CrK-GnOr5fbjv-heKwg/view?usp=sharing"
    flag.classList.add("hidden")
  }
})


