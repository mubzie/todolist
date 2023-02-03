import { v4 as uuidv4 } from 'uuid';

const ProjectFactory = (name) => {

  //get project name
  const getProjectName = () => name

  //define task array that stores all tasks inside of a project
  const tasks = [];

  //set unique project id using uuidv4
  const id = uuidv4()

  //add task to array by using Array.push method
  const addTask = (todo) => {
    tasks.push(todo)
    console.log(tasks)
  }

  //delete task by finding the index of its id and deleting it
  const deleteTask = (index) => {
    const taskIndex = tasks.findIndex((data) => data.id === index)
    tasks.splice(taskIndex, 1)
    console.log(tasks)
  }

  //get task by id and update it using Object.assign
  const updateTask = (index, {}) => {
    return Object.assign(tasks[index], {})
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