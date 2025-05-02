import { useState } from "react";
import TaskItem from "../TaskItem";
import TaskInput from "../TaskInput";
import { task as TaskModel } from "../../models/task";
import "./style.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addNewTask = (taskTitle) => {
    if (taskTitle.trim()) {
      const newTask = new TaskModel(Date.now(), taskTitle, false); // Usar el modelo
      setTasks([...tasks, newTask]);
    }
  };

  return (
    <div className="task-list-container">
      <TaskInput onAddTask={addNewTask} />
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleStatus={toggleTaskStatus}
            onDeleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
