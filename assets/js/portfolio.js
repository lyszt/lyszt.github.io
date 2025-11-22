// Load project data
(function() {
  let projectData = {};
  fetch('/assets/data/projects.json')
    .then(res => res.json())
    .then(data => {
      projectData = data;
      initializePortfolio(projectData);
    })
    .catch(err => console.error('Failed to load projects:', err));

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

// Initialize portfolio after data loads
function initializePortfolio(projectData) {
  // Preprocess projectData into a Map for faster lookups
  const allProjects = Object.values(projectData).flat();
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
    project.addEventListener("mouseenter", () => handleProjectInteraction(project), { passive: true });
    project.addEventListener("click", () => handleProjectInteraction(project));
  });

  // Show code folder by default
  const transition = document.querySelector("#transition");
  if(transition?.classList.contains("active")){
    transition.classList.remove("active");
  }
  code_folder.classList.remove("hidden");
  code_folder.classList.add("focus");

// Menu item interactions on portfolio pick
  const folders = { photo: photo_folder, video: video_folder, design: design_folder, code: code_folder };
  const buttons = { 
    photography: photography_button, 
    video: videography_button, 
    design: design_button, 
    code: code_button 
  };

  function switchFolder(activeKey) {
    // Hide all folders and remove focus from all buttons
    Object.values(folders).forEach(folder => folder.classList.add("hidden"));
    Object.values(buttons).forEach(btn => btn.classList.remove("focus"));
    
    // Show active folder and focus button
    folders[activeKey].classList.remove("hidden");
    buttons[activeKey].classList.add("focus");
  }

  photography_button.addEventListener("click", () => switchFolder('photo'));
  videography_button.addEventListener("click", () => switchFolder('video'));
  design_button.addEventListener("click", () => switchFolder('design'));
  code_button.addEventListener("click", () => switchFolder('code'));
}
})();
