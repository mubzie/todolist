import { v4 as uuidv4 } from "uuid"

const TaskFactory = (title, description, dueDate, priority) => {

  //set unique task id using uuidv4
  const id = uuidv4()

  return {
    title,
    description,
    dueDate,
    priority,
    id
  }
  
}

export { TaskFactory }