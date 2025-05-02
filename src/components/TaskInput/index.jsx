import { useState } from "react";
import "./style.css";

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    onAddTask(taskTitle);
    setTaskTitle(""); // Limpiar el input
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        className="inputTask"
      />
      <button onClick={handleAddTask} className="btnTask">
        Agregar
      </button>
    </div>
  );
};

export default TaskInput;
