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
  // GeoLocation interactions
  // Elements to translate in homepage
  const user_lang = navigator.language;
  const pageURL = window.location.href;
  console.log(`User language is ${user_lang}`);

  if (!user_lang.startsWith("en")) {
    console.log(`Detected language (${user_lang}) is not English.`);
      
  }

});

