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
    delIcon.classList.add('del-btn');
    delIcon.setAttribute('data-id', `${i}`);

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

}

export { displayProject }