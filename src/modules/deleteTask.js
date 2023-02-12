const deleteTask = (currProject) => {

    const TaskdelBtns = document.querySelectorAll('.task-del-btn');

    TaskdelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            //locating the index
            const index = btn.dataset.id
            
            //delete the task from tasks array
            console.log(index)
            currProject.deleteTask(index)

            //remove the project from the DOM
            btn.parentElement.parentElement.remove();

        })
    })

}

export { deleteTask }
