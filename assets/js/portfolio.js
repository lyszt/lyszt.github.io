const project_index = {
  design: [
    {
      title: "Behance",
      description: "Find a variety of my work here, some that haven't been highlighted in the website.",
      link: "https://www.behance.net/kalliddel",
      image: "assets/img/behance.png",
      alt: "My corporate logo."
    },
    {
      title: "Daily photography",
      description: "A collection of pictures taken from everyday life with my Canon Powershot SX10IS.",
      link: "https://www.instagram.com/lys_kaldwin/",
      image: "assets/img/Portfolio/Fotografia/3.jpg",
      alt: "Mushroom contrasting in scenery"
    },
    {
      title: "Digital Art",
      description: "Check out my digital artworks.",
      link: "https://www.instagram.com/kaldwin__/",
      image: "assets/img/Portfolio/Design/2.jpg",
      alt: "Deestad, protagonist of the Awesome Caderno."
    },
    {
      title: "Lygon X - Design",
      description: "Check out all art pieces that have been created for Lygon X.",
      link: "https://lyszt.net/Lygon",
      image: "assets/img/Logobackground.png",
      alt: "3D Mockup of the logo of Lygon."
    },
  ],
  video: [
    {
      title: "Lygon X - Video",
      description: "My personal portfolio channel with movies, series and art. You can find some of my best work here.",
      link: "https://www.youtube.com/playlist?list=PLHF3MWlIK_c-uffF_lHzZJzP2lX4SyhlC",
      image: "assets/img/lygon.png",
      alt: "Logo of Studio Lygon Xin."
    },
    {
      title: "MementosKai",
      description: "Gaming channel video editor, producer and designer.",
      link: "https://www.youtube.com/@MementosKai",
      image: "assets/img/Portfolio/Thumbnails/M. kai.png",
      alt: "Beautiful and colourful abstract logo of MementosKai"
    },
    {
      title: "Gringo Reage",
      description: "YouTube Channel of an American learning Portuguese with over 50 thousand subscribers.",
      link: "https://www.youtube.com/@GringoReage",
      image: "assets/img/Portfolio/Thumbnails/gringoreage.jpg",
      alt: "MNP Logo"
    },
    {
      title: "LaWinter",
      description: "My English gaming channel, in which I'm the main video editor, producer and designer.",
      link: "https://www.youtube.com/@kaldwin6853",
      image: "assets/img/artoflogosuns.png",
      alt: "Warrior pointing sword up"
    },
    {
      title: "Fidelity Factory",
      description: "Worked and created videos for a Microsoft Partner that offered solutions regarding Power Platform.",
      link: "https://youtu.be/lJE1pBazf4Q",
      image: "assets/img/Portfolio/Thumbnails/mnp.jpg",
      alt: "MNP Logo"
    }
  ],
  web: [
    {
      title: "Therapy with Lex",
      description: "I designed the sections regarding publishing, supervision, and coaching in a fancy, intuitive fashion.",
      link: "https://lyszt.net/Lex",
      image: "assets/img/web-lexcover.svg",
      alt: "Therapy with Lex Enrico Santi live view from a laptop"
    },
    {
      title: "LYSZT",
      description: "The current website, based on luxury brands, minimalism and modernism. Learn here what inspired me.",
      link: "https://lyszt.net/LYSZT",
      image: "assets/img/Portfolio/Thumbnails/LYSZT.svg",
      alt: "Stylized logo for LYSZT, my brand."
    },
    {
      title: "MACTAB Divisórias",
      description: "Responsible for the design of the majority of the website, not responsible for newer changes.",
      link: "https://lyszt.net/Mactab",
      image: "assets/img/web-mactab.svg",
      alt: "Mactab divisórias e soluções"
    },
    {
      title: "Blade Zenon",
      description: "It's the website of a game development project from 2015. I still work on it to keep it fresh.",
      link: "https://lyszt.net/Zenon",
      image: "assets/img/web-bz.svg",
      alt: "Person using the website for Blade Zenon."
    }
  ],
  code: [
    {
      title: "Providentia Magnata",
      description: "Python Discord bot built for spying and war. Made with SQL and Python using the module discord.py.",
      link: "https://github.com/lyszt/ProvidentiaMagnata",
      image: "assets/img/Portfolio/Coding/providentiathumb.png",
      alt: "Data Analysis Interface"
    },
    {
      title: "ToadKeep",
      description: "Useful Python Kivy virtual keyboard for copying characters and emoticons. Made to fix my old laptop's keyboard problems.",
      link: "https://github.com/lyszt/ToadKeep",
      image: "assets/img/Portfolio/Coding/toadkeeplogo.png",
      alt: "Mechanical Frog and keyboard hero Toad Kip"
    },
    {
      title: "The Scarlett Gateway",
      description: "Personal dashboard system made with React, Vite and Express that merges all my other projects into one system. Has a link to discord using Providentia.",
      link: "https://github.com/lyszt/gateway",
      image: "assets/img/Portfolio/Coding/scarlettgateway.png",
      alt: "My Personal Dashboard"
    }
  ]
};

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

// This is where the project interactions within the portfolio happen

// Preprocess project_index into a Map for faster lookups
const allProjects = Object.values(project_index).flat();
const projectMap = new Map(
  allProjects.map(item => [item.title.trim().toLowerCase(), item])
);

const projects = document.querySelectorAll('.port-folder .project');
const project_title = document.querySelector("#project-title");
const project_desc = document.querySelector("#project-desc");
const project_link = document.querySelector("#project_link");

function handleProjectInteraction(project){
  const titleToFind = project.title.trim().toLowerCase();
  const project_info = projectMap.get(titleToFind);

  if (!project_info) {
    console.warn(`Project "${titleToFind}" not found.`);
    return;
  }

  project_title.textContent = project.title; // Safer than innerHTML
  project_desc.textContent = project_info.description;
}
projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
    handleProjectInteraction(project)
  });
  project.addEventListener("onClick", () => {
    handleProjectInteraction(project)
  });
});

// On document load make preparations for Portfolio
addEventListener("DOMContentLoaded", () => {

  code_folder.classList.remove("hidden");
  code_folder.classList.add("focus");

  if(transition_anim.classList.contains("active")){
    transition_anim.classList.remove("active");
  }
  code_folder.classList.remove("hidden");
  code_folder.classList.add("focus");


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
})
