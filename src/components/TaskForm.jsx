import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSumbit = (e) =>{
        e.preventDefault();
        createTask(title,description);
        setTitle('')
        setDescription('')
    }


  return (
    <form
      onSubmit={handleSumbit}
      style={{ marginLeft: "7%", marginTop: "3%", marginRight: "7%" }}
    >
      <label className="form-label" style={{ color: "white" }}>
        Añade una nueva tarea
      </label>
      <input
        className="form-control"
        placeholder="Nueva titulo..."
        style={{
          backgroundColor: "#192540",
          color: "white",
          borderColor: "#0A1428",
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <input
        className="form-control"
        placeholder="Nueva descripcion..."
        style={{
          backgroundColor: "#192540",
          color: "white",
          borderColor: "#0A1428",
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <div className='d-flex justify-content-center'>
        <button
          className="btn"
          style={{
            backgroundColor: "#192540",
            color: "white",
            marginTop: "2%",
            height: "50px",
            width: "300px"
          }}
        >
          Crear Nueva Tarea
        </button>
      </div>
      <hr></hr>
    </form>
  );
}

export default TaskForm