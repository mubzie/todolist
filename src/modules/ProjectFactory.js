import { TaskFactory } from "./TaskFactory";

const ProjectFactory = (name) => {

    const getProjectName = () => name
  
    const tasks = [];
  
    const addTask = (todo) => {
      tasks.push(todo)
      console.log(tasks)
    }
  
    const deleteTask = (index) => {
      tasks.splice(index, 1)
      console.log(tasks)
    }
  
    const updateTask = (index, task) => {
      return Object.assign(tasks[index], task)
    }
   
    return {
      tasks,
      getProjectName,
      addTask,
      deleteTask,
      updateTask
    }
  
}

export { ProjectFactory }