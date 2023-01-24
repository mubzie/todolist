import { ProjectFactory } from "./ProjectFactory";
import { v4 as uuidv4 } from 'uuid';

const PM = {

    name: 'Project Manager',
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