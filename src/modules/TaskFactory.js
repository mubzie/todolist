import { v4 as uuidv4 } from "uuid"

const TaskFactory = (title, description, dueDate, priority) => {

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