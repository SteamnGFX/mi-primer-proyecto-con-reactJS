import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {

  const {deleteTask} = useContext(TaskContext)

  return (
    <div
      className="col-3 text-center"
      style={{
        backgroundColor: "#192540",
        width: "300px",
        height: "250px",
        borderRadius: "19px",
        marginLeft: "20px",
        marginTop: "2%",
        marginRight: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", color: "white", marginTop:"10%" }}>{task.title}</h1>
      <p style={{ color: "#B8B8B8" }}>{task.description}</p>
      <div>
        <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
          {" "}
          Eliminar Tarea{" "}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
