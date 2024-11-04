// TRANSLATION
import { translation } from './translation.js';

const photography_button = document.querySelector("#port-photography");
const videography_button = document.querySelector("#port-video");
const design_button = document.querySelector("#port-web");
const code_button = document.querySelector("#port-code");

const photo_folder = document.querySelector("#photography-folder");
const video_folder = document.querySelector("#video-folder");
const design_folder = document.querySelector("#web-folder");
const code_folder = document.querySelector("#code-folder");

addEventListener("DOMContentLoaded", () => {
  // GeoLocation interactions
  // Elements to translate in homepage
  let user_lang = navigator.language;
  console.log(user_lang);

  const landing_text = document.querySelector("#landing-text p");
  const flag = document.querySelector(".flag");
  const cv_link = document.querySelector(".cv");
  const intro_text = document.querySelector(".introduction p");
  const salutations = document.querySelector(".introduction .left h3");

  if (user_lang.startsWith("fr")) {
    design_button.innerText = "Projets Web";
    code_button.innerText = "Projets Logiciels";
    photography_button.innerText = "Photographie et Conception";
    videography_button.innerText = "Videographie";

    intro_text.innerHTML = translation.Introduction_FR[0];
    salutations.innerHTML = translation.Introduction_FR[1];
    landing_text.innerHTML = "<b>Soyez le bienvenu!</b> Je vous offre ce que vous recherchez.";

    cv_link.href = "https://drive.google.com/file/d/1UJTMjMxV83N_CFwpVpyr34CVuklIPgcJ/view?usp=sharing";

    if (user_lang === "fr-CA") {
      flag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Quebec.svg";
      flag.alt = "French-Canadian Flag - Quebec";
    }
  } else if (user_lang.startsWith("pt")) {
    flag.classList.add("hidden");
    design_button.innerText = "Design Web";
    code_button.innerText = "Softwares";
    photography_button.innerText = "Fotografia e Design";
    videography_button.innerText = "Videografia";

    landing_text.innerHTML = "<b>A simplicidade</b> é o mais alto grau da sofisticação.";
    intro_text.innerHTML = translation.Introduction_PT[0];
    salutations.innerHTML = translation.Introduction_PT[1];

    flag.src = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
    flag.alt = "Bandeira de Portugal - Língua Portuguesa";
  } else {
    cv_link.href = "https://drive.google.com/file/d/1FK_yAh3cft7x2CrK-GnOr5fbjv-heKwg/view?usp=sharing";
    flag.classList.add("hidden");
  }
});
