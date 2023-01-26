import { PM } from "./modules/PM"
import { ProjectFactory } from "./modules/ProjectFactory"
import { TaskFactory } from "./modules/TaskFactory"
import { displayProject, displayTask } from "./modules/UI"
import "./styles/todo.css"

//target input form 
const addProjectToDom = document.getElementById('addProjectForm');
const addTaskToDom = document.getElementById('addTaskForm');

//created a default project and added it to PM
const inbox = ProjectFactory('Inbox');
PM.addProject(inbox);

const createProject = (e) => {
    e.preventDefault()
    
    const title = document.getElementById('title-p').value;
    
    const project = ProjectFactory(title);
    
    PM.addProject(project)
    
    displayProject(project)
}

addProjectToDom.addEventListener('submit', createProject)


addTaskToDom.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const title = document.getElementById('title-t').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    
    const task = TaskFactory(title, description, dueDate, priority)

    inbox.addTask(task)
    
    displayTask(inbox.tasks)

    console.log(task)
})