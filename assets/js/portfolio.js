const project_index = {
  design: [
    {
      title: "Behance",
      description: "A showcase of my design work, including projects not featured on my main site.",
      link: "https://www.behance.net/kalliddel",
      image: "assets/img/behance.png",
      alt: "My corporate logo."
    },
    {
      title: "Digital Art",
      description: "A collection of my digital art pieces and experiments in creative design.",
      link: "https://www.instagram.com/lys_dikaldwin",
      image: "assets/img/Portfolio/Design/2.jpg",
      alt: "Deestad, protagonist of the Awesome Caderno."
    },
    {
      title: "Lygon X - Design",
      description: "Design work created exclusively for the Lygon X project.",
      link: "https://lyszt.net/Lygon",
      image: "assets/img/Logobackground.png",
      alt: "3D mockup of the Lygon logo."
    }
  ],
  video: [
    {
      title: "Lygon X - Video",
      description: "My channel featuring films, series, and art projects.",
      link: "https://www.youtube.com/playlist?list=PLHF3MWlIK_c-uffF_lHzZJzP2lX4SyhlC",
      image: "assets/img/lygon.png",
      alt: "Logo of Studio Lygon Xin."
    },
    {
      title: "MementosKai",
      description: "A gaming channel where I handle video editing, production, and design work.",
      link: "https://www.youtube.com/@MementosKai",
      image: "assets/img/Portfolio/Thumbnails/M. kai.png",
      alt: "Abstract logo for MementosKai."
    },
    {
      title: "LaWinter",
      description: "An English gaming channel that I manage as the main editor and designer.",
      link: "https://www.youtube.com/@kaldwin6853",
      image: "assets/img/artoflogosuns.png",
      alt: "Warrior with raised sword."
    },
    {
      title: "Fidelity Factory",
      description: "Video work produced for a Microsoft partner focused on Power Platform solutions.",
      link: "https://youtu.be/lJE1pBazf4Q",
      image: "assets/img/Portfolio/Thumbnails/mnp.jpg",
      alt: "MNP Logo"
    }
  ],
  web: [
    {
      title: "Therapy with Lex",
      description: "A modern website for an american therapist. I built and reworked the majority of the pages inside.",
      link: "https://lyszt.net/Lex",
      image: "assets/img/web-lexcover.svg",
      alt: "Therapy with Lex viewed on a laptop",
      video: "/assets/video/Lex.mp4"
    },
    {
      title: "LYSZT",
      description: "A portfolio website inspired by luxury brands and minimalism, but that is also a bit experimentative.",
      link: "https://lyszt.net/LYSZT",
      image: "assets/img/Portfolio/Thumbnails/LYSZT.svg",
      alt: "Stylized logo for LYSZT."
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
      description: "A website for a 2015 game project that I still update to keep current.",
      link: "https://lyszt.net/Zenon",
      image: "assets/img/web-bz.svg",
      alt: "User interacting with the Blade Zenon site."
    }
  ],
  code: [
    {
      title: "Providentia Magnata",
      description: "A Python Discord bot for espionage and server-security, built with SQL and discord.py.",
      link: "https://github.com/lyszt/ProvidentiaMagnata",
      image: "assets/img/Portfolio/Coding/providentiathumb.png",
      alt: "Data analysis interface."
    },
    {
      title: "ToadKeep",
      description: "A practical Python Kivy virtual keyboard for copying characters and emoticons seamlessly.",
      link: "https://github.com/lyszt/ToadKeep",
      image: "assets/img/Portfolio/Coding/toadkeeplogo.png",
      alt: "Logo for ToadKeep."
    },
    {
      title: "The Scarlett Gateway",
      description: "A personal dashboard built with React, Vite, and Express.",
      link: "https://github.com/lyszt/gateway",
      image: "assets/img/Portfolio/Coding/scarlettgateway.png",
      alt: "My personal dashboard."
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
const project_link = document.querySelector("#project-link");

function handleProjectInteraction(project){
  const titleToFind = project.title.trim().toLowerCase();
  const project_info = projectMap.get(titleToFind);

  if (!project_info) {
    console.warn(`Project "${titleToFind}" not found.`);
    return;
  }

  project_title.textContent = project.title;
  project_desc.textContent = project_info.description;
  project_link.setAttribute("href", project_info.link);
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

  if(transition.classList.contains("active")){
    transition.classList.remove("active");
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
