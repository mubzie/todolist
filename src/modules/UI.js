import { ProjectFactory } from "./ProjectFactory";
import { TaskFactory } from "./TaskFactory";

const displayProject = (project) => {
    
    const sideBar = document.querySelector('.sidebar');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.classList.add('add-project');
    projectContainer.textContent = `${project.getProjectName()}`
    

    sideBar.appendChild(projectContainer)
}

const displayTask = (tasks) => {

    let table = '<table border="1">';
    table += `<tr><th>Author</th><th>Title</th><th>Pages</th><th>Read Status</th><th>remove book</th></tr>`;
    
    tasks.forEach((task, i) => {
        table += `<tr>`;
           table += `<td>${task.title}</td>`;
           table += `<td>${task.description}</td>`;
           table += `<td>${task.dueDate}</td>`;
           table += `<td>${task.priority}</td>`;

           table += `<td style="background-color: #f6c5c5">
           <button class="icon-btn delBtn" data-index=${i}><img src="svg/delete-btn.svg" alt="delete btn"></button>
                    </td>`;
        table += `</tr>` 
    });

    table += '</table>';

    document.querySelector('.todo-display').innerHTML = table;

}

export { displayProject, displayTask }