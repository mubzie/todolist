import { ProjectFactory } from "./ProjectFactory";

const displayTask = (tasks, i) => {

    const todoDisplay = document.querySelector('.todo-display');

    const container = document.createElement('div');
    container.classList.add('card-container');

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = `${tasks.title}`

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = `${tasks.description}`;

    const taskDueDate = document.createElement('div');
    taskDueDate.textContent = `${tasks.dueDate}`;
    taskDueDate.classList.add('task-duedate');

    const taskPriority = document.createElement('div');
    taskPriority.textContent = `${tasks.priority}`
    taskPriority.classList.add('task-priority');

    subContainer.append(taskDueDate, taskPriority)

    const lineBreak = document.createElement('hr');
    lineBreak.classList.add('divider')

    const optionContainer = document.createElement('div');
    optionContainer.classList.add('option-container');

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete task'
    delBtn.classList.add('task-del-btn')
    delBtn.setAttribute('data-id', `${i}`)

    optionContainer.appendChild(delBtn)

    container.append(taskTitle, taskDescription, subContainer, lineBreak, optionContainer)

    todoDisplay.appendChild(container)

    const TaskdelBtns = document.querySelectorAll('.task-del-btn');

    TaskdelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            //locating the index
            const index = btn.dataset.id
            
            //delete the project from projects array
            console.log(index)
            ProjectFactory.deleteTask(index)

            //remove the project from the DOM
            // btn.parentElement.parentElement.remove();

        })
    })

}

export { displayTask }