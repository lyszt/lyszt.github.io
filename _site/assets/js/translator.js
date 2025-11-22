// TRANSLATION

addEventListener("DOMContentLoaded", () => {

  // GeoLocation interactions
  const user_lang = navigator.language;
  console.log(`User language is ${user_lang}`);
  const cv_links = document.querySelectorAll(".cv");

  // FRENCH
  if (user_lang.startsWith("fr")) {
    cv_links.forEach(link => link.href = "https://drive.google.com/file/d/1UJTMjMxV83N_CFwpVpyr34CVuklIPgcJ/view?usp=sharing");
  }
  // PORTUGUESE
  else if (user_lang.startsWith("pt")) {
    cv_links.forEach(link => link.href = "https://drive.google.com/file/d/1FK_yAh3cft7x2CrK-GnOr5fbjv-heKwg/view?usp=sharing");
  }
  // Default (English or others)
  else {
    cv_links.forEach(link => link.href = "https://drive.google.com/file/d/1yEAZPgopRYWOElEYl4y3Mi0A1oyE5U2D/view?pli=1");
  }


  // Log if the language is not English
  if (!user_lang.startsWith("en")) {
    console.log(`Detected language (${user_lang}) is not English.`);
  }

});

