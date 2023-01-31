import { PM } from "./PM";

const displayProject = (project, i) => {
    
    const sideBar = document.querySelector('.sidebar');
    
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container', 'add-project-btn', 'p-button');
    projectContainer.textContent = `${project.getProjectName()}`

    const delIcon = document.createElement('div');
    delIcon.textContent = 'x'
    delIcon.classList.add('del-btn')
    delIcon.setAttribute('data-id', `${i}`)

    projectContainer.append(delIcon)
    
    sideBar.appendChild(projectContainer)
    
    const buttons = document.querySelectorAll('.p-button');
    
    buttons.forEach( button => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            
            document.getElementById('pid').value = project.id;

            console.log(project.id)
        })
    })


    const delBtns = document.querySelectorAll('.del-btn');

    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            const i = btn.dataset.id

            function index(data) {

                return data.id === i
            }
            
            PM.deleteProject(index)

            btn.parentElement.remove();

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