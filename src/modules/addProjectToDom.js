import { ProjectFactory } from "./ProjectFactory";

const displayProject = (project) => {
    
    const sideBar = document.querySelector('.sidebar');
    const mainDisplay = document.querySelector('.main-display');
    const mainContainer = document.createElement('div');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container')
    projectContainer.textContent = `${project.getProjectName()}`

    for (let i = 0; i <= project.length; i++) {
        console.log(project.length)
    }

    // mainDisplay.appendChild(mainContainer)
    sideBar.appendChild(projectContainer)
    mainDisplay.appendChild(mainContainer)
}

export { displayProject }