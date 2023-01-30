const displayProject = (project) => {
    
    const sideBar = document.querySelector('.sidebar');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.classList.add('add-project-btn');
    projectContainer.classList.add('p-button');
    projectContainer.textContent = `${project.getProjectName()}`
    
    sideBar.appendChild(projectContainer)
    
    const buttons = document.querySelectorAll('.p-button');
    
    buttons.forEach( button => {
        button.addEventListener('click', () => {
            console.log(project.id)
        })
    })
}

const displayTask = (tasks) => {

    let table = '<table border="1">';
    
    tasks.forEach((task, i) => {
        table += `<tr>`;
        table += `<td>${task.title}</td>`;
        table += `<td>${task.description}</td>`;
        table += `<td>${task.dueDate}</td>`;
        table += `<td>${task.priority}</td>`;

        table += `<td style="background-color: #f6c5c5">
        <button class="icon-btn delBtn" data-index=${i} alt="delete btn">delete task</button>
        </td>`;
    });

    table += '</table>';

    document.querySelector('.todo-display').innerHTML = table;

}

export { displayProject, displayTask }