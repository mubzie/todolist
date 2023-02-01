const PM = {

    name: 'Project Manager',
    projects: [],

    //add project to project array inside of project manager object (the PM object manages project factory)
    addProject: function (project) {
        this.projects.push(project)
        console.log(this.projects)
    },

    //delete project by locating it id and deleting it
    deleteProject: function (index) {
        const find = this.projects.findIndex((data) => data.id === index)
        console.log(find)
        this.projects.splice(find, 1)
        console.log(this.projects)
    },

    //update project title with Object.assign
    updateProject: function (index, newTitle) {
        return Object.assign(this.projects[index], newTitle)
    }

}

export { PM }