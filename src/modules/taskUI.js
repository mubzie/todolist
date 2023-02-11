const displayTask = (task, i) => {

    const todoDisplay = document.querySelector('.todo-display');

    const container = document.createElement('div');
    container.classList.add('card-container');

    const subContainer = document.createElement('div');
    subContainer.classList.add('sub-container');
    
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = `${task.title}`

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = `${task.description}`;

    const taskDueDate = document.createElement('div');
    taskDueDate.textContent = `${task.dueDate}`;
    taskDueDate.classList.add('task-duedate');

    const taskPriority = document.createElement('div');
    taskPriority.textContent = `${task.priority}`
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

}

export { displayTask }