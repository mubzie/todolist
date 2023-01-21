import { ProjectFactory } from "./ProjectFactory";

const PM = {

    name: 'Project Managerr',
    projects: [],

    addProject: function (project) {
        this.projects.push(project)
        console.log(this.projects)
    },

    deleteProject: function (index) {
        this.projects.splice(index, 1)
        console.log(this.projects)
    },

    updateProject: function (index, project) {
        return Object.assign(this.projects[index], project)
    }

}

export { PM }