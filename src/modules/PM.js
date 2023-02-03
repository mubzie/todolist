const PM = {

    //define project PM object name
    name: 'Project Manager',

    //create projects array that stores all projects
    projects: [],

    //add project to projects array inside of PM object (the PM object manages project factory)
    addProject: function (project) {
        this.projects.push(project)
        console.log(this.projects)
    },

    //delete project by finding the index of its id and deleting it
    deleteProject: function (index) {
        const projectIndex = this.projects.findIndex((data) => data.id === index)
        console.log(projectIndex)
        this.projects.splice(projectIndex, 1)
        console.log(this.projects)
    },

    //update project title with Object.assign
    updateProject: function (index, {}) {
        return Object.assign(this.projects[index], {})
    }

}

export { PM }