import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0){
    return <>
    <h1 className='text-center mx-auto' style={{color: "White"}}>NO HAY TAREAS PENDIENTES!</h1>
    <h1 className='text-center mx-auto' style={{color: "White"}}>🎉🎉🎉</h1>
    </>
  }

  return (
    <div className='row d-flex justify-content-center'>
      <h1 className='text-center' style={{color: "white"}} >LISTA DE TAREAS</h1>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList
