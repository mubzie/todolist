import { PM } from "./modules/PM"
import { ProjectFactory } from "./modules/ProjectFactory"
import { TaskFactory } from "./modules/TaskFactory"

const addProjectToDom = document.getElementById('addProjectForm');
const addTaskToDom = document.getElementById('addTaskForm');

addProjectToDom.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)

    const name = document.getElementById('title-p').value

    const project = ProjectFactory(name)

    PM.addProject(project)

    console.log(PM.projects[0].getProjectName())
})


addTaskToDom.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)

    const title = document.getElementById('title-t').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const task = TaskFactory(title, description, dueDate, priority)

    console.log(task)
})