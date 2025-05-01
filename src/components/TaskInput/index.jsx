import { useState } from "react";

import { task } from "../../models/task";
import "./style.css";

const TaskInput = () => {
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddTask = () => {
    if (title.trim() === "") {
      alert("Debe ingresar un título");
      return;
    }
    const newTask = new task(lets.tasks.length + 1, title, false);
  };

  return (
    <>
      <input
        className="inputTask"
        type="text"
        value={title}
        onChange={handleInputChange}
        placeholder="Ingresar Nueva Tarea..."
      />
      <button className="btnTask" onClick={handleAddTask}>
        Agregar
      </button>
    </>
  );
};

export default TaskInput;
