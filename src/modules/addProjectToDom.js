import { ProjectFactory } from "./ProjectFactory";

const displayProject = (project) => {
    
    const sideBar = document.querySelector('.sidebar');
    const mainDisplay = document.querySelector('.main-display');

    const container = document.createElement('div');
    container.classList.add('project-container')
    container.textContent = `${project.getProjectName()}`

    // project.projects.forEach(task => {
    //     console.log(task)
    //     const mainContainer = document.createElement('div');
    //     mainContainer.classList.add('project-header')
    //     mainContainer.textContent = `${project.getProjectName()}`
    // });

    sideBar.appendChild(container)
    // mainDisplay.appendChild(mainContainer)
}

export { displayProject }