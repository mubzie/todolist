import { PM } from "./PM";  


const deleteProject = (project) => {

    //delete each project with their respective id
    const delBtns = document.querySelectorAll('.del-btn');
    
    //iterate between projects, locate the index and delete the project
    delBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
    
        //locating the index
        const index = btn.dataset.id
        console.log(index)
        
        //delete the project from projects array
        PM.deleteProject(index)
    
        //remove the project from the DOM
        btn.parentElement.remove();
    
        })
    })

}

export { deleteProject }