import { PM } from "./modules/PM"
import { ProjectFactory } from "./modules/ProjectFactory"
import { TaskFactory } from "./modules/TaskFactory"
import { displayProject, displayTask } from "./modules/UI"
import "./styles/todo.css"
import { format } from "date-fns"



//target project and task input form 
const addProjectToDom = document.getElementById('addProjectForm');
const addTaskToDom = document.getElementById('addTaskForm');

//target default project button
const defaultProjectBtn = document.querySelector('.default-btn');

//create a default project and add it to PM projects collections
const inbox = ProjectFactory('Inbox');
PM.addProject(inbox);

//set the default project id
document.getElementById('pid').value = inbox.id

//set default project as current project when in focus
defaultProjectBtn.addEventListener('click', () => {
    document.getElementById('pid').value = inbox.id
})


//create new project
const createProject = (e) => {
    e.preventDefault()
    
    //target input form for project title
    const title = document.getElementById('title-p').value;
    
    //initialise projectFactory with form input value
    const project = ProjectFactory(title);
    console.log(project.id)
    
    //add project to PM project collections (arrays)
    PM.addProject(project)
    
    //display project in the UI
    displayProject(project, project.id)
    
}
addProjectToDom.addEventListener('submit', createProject);


//create task and add it to specific project
const createTask = (e) => {
    e.preventDefault()
    
    //target input form for task information
    const title = document.getElementById('title-t').value;
    const description = document.getElementById('description').value;
    const dueDate = format(new Date(document.getElementById('date').value), 'dd MMM');
    const priority = document.getElementById('priority').value;
    
    //initialise taskFactory with form input value
    const task = TaskFactory(title, description, dueDate, priority);

    //get unique project id from the form and save it into a variable (projectId)
    const projectId = document.getElementById('pid').value;

    //find specific project from within the PM projects collections using the 
    //project id 
    const currentProject = PM.projects.find((data) => data.id === projectId);
    console.log(currentProject.id)
    
    //check if project was found
    if(currentProject !== undefined) {

        console.log('yes')
        if(currentProject.id === projectId) {
            console.log('another yes')
            //if found and its id is equal to projectId, add task to the project
            currentProject.addTask(task)
            
            //display task in the UI
            displayTask(task)
        }

    } else {
        console.log('no project found')
    }
    
}
addTaskToDom.addEventListener('submit', createTask)