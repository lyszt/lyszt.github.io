// TRANSLATION
import { translation } from './translation.js';

const photography_button = document.querySelector("#port-photography a");
const videography_button = document.querySelector("#port-video a");
const design_button = document.querySelector("#port-web a");
const code_button = document.querySelector("#port-code a");

const photo_folder = document.querySelector("#photography-folder");
const video_folder = document.querySelector("#video-folder");
const design_folder = document.querySelector("#web-folder");
const code_folder = document.querySelector("#code-folder");



addEventListener("DOMContentLoaded", () => {

  const translation_top = document.querySelector(".skiptranslate>iframe")
  translation_top.style.visibility = "hidden";
  // GeoLocation interactions
  // Elements to translate in homepage
  const user_lang = navigator.language;
  console.log(`User language is ${user_lang}`);
  const cv_link = document.querySelector(".cv");

  // FRENCH
  if (user_lang.startsWith("fr")) {
    cv_link.href = "https://drive.google.com/file/d/1UJTMjMxV83N_CFwpVpyr34CVuklIPgcJ/view?usp=sharing";
  }
  else if (user_lang.startsWith("pt")) {
    cv_link.href = "https://drive.google.com/file/d/1FK_yAh3cft7x2CrK-GnOr5fbjv-heKwg/view?usp=sharing";
  } else {
    cv_link.href = "https://drive.google.com/file/d/1yEAZPgopRYWOElEYl4y3Mi0A1oyE5U2D/view?pli=1";
  }
  if (!user_lang.startsWith("en")) {
    console.log(`Detected language (${user_lang}) is not English.`);

  }

});

