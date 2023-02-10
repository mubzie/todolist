import { PM } from "./PM";

const displayProject = (project, i) => {
    
    //target side navigation
    const sideNav = document.querySelector('.sidebar');
    
    //create project container div
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container', 'p-button');
    projectContainer.textContent = `${project.getProjectName()}`

    //create a delete icon on each project container and set a data attribute to locate its id
    const delIcon = document.createElement('div');
    delIcon.textContent = 'x'
    delIcon.classList.add('del-btn')
    delIcon.setAttribute('data-id', `${i}`)

    //append delete icon to parent container
    projectContainer.append(delIcon)
    
    //append project container to side navigation
    sideNav.appendChild(projectContainer);
    
    //target all project container(buttons)
    const Projectbtns = document.querySelectorAll('.p-button');
    
    //iterates between each btns
    Projectbtns.forEach( btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            
            //set project id with the currently selected project container
            document.getElementById('pid').value = project.id;

            console.log(project.id)
        })
    })
    
    
    //delete each project with their respective id
    const delBtns = document.querySelectorAll('.del-btn');

    //iterate between projects, locate the index and delete the project
    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            //locating the index
            const index = btn.dataset.id
            
            //delete the project from projects array
            PM.deleteProject(index)

            //remove the project from the DOM
            btn.parentElement.remove();

        })
    })

}

const displayTask = (tasks) => {

    const todoDisplay = document.querySelector('.todo-display');
    // const todoDisplay = document.createElement('div');

    const container = document.createElement('div');
    
    // tasks.forEach( task => {
        
    //     const taskTitle = document.createElement('div');
    //     taskTitle.textContent = `${task.title}`

    //     const taskDescription = document.createElement('div');
    //     taskDescription.textContent = `${task.description}`;

    //     const taskDueDate = document.createElement('div');
    //     taskDueDate.textContent = `${task.dueDate}`;

    //     const taskPriority = document.createElement('div');
    //     taskPriority.textContent = `${task.priority}`

    //     container.append(taskTitle, taskDescription, taskDueDate, taskPriority)
        
    // })
    
    const taskTitle = document.createElement('div');
    taskTitle.textContent = `${tasks.title}`

    const taskDescription = document.createElement('div');
    taskDescription.textContent = `${tasks.description}`;

    const taskDueDate = document.createElement('div');
    taskDueDate.textContent = `${tasks.dueDate}`;

    const taskPriority = document.createElement('div');
    taskPriority.textContent = `${tasks.priority}`

    container.append(taskTitle, taskDescription, taskDueDate, taskPriority)

    todoDisplay.appendChild(container)

    // document.querySelector('.todo-display').innerHTML = container

}

export { displayProject, displayTask }