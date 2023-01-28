import { v4 as uuidv4 } from 'uuid';

const ProjectFactory = (name) => {

  const getProjectName = () => name

  //task array that include all tasks inside of a project
  const tasks = [];

  const id = uuidv4()

  //add task to array by using Array.push method
  const addTask = (todo) => {
    tasks.push(todo)
    console.log(tasks)
  }

  //find task index and delete it
  const deleteTask = (index) => {
    tasks.splice(index, 1)
    console.log(tasks)
  }

  //get task by id and update it using Object.assign
  const updateTask = (index, task) => {
    return Object.assign(tasks[index], task)
  }
  
  return {
    tasks,
    getProjectName,
    addTask,
    deleteTask,
    updateTask,
    id
  }
  
}

export { ProjectFactory }