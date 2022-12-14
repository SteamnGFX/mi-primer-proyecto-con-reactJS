import {createContext, useState, useEffect} from 'react'
import { tasks as data } from "../data/tasks.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tasks,
      { title: taskTitle, id: tasks.length, description: taskDescription },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() =>{
    setTasks(data)
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

