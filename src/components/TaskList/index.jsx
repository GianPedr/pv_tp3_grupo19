import { useState, useEffect } from 'react';
import TaskItem from '../TaskItem';
import TaskInput from '../TaskInput';
import { task as TaskModel } from '../../models/task'; // Importar el modelo
import './style.css';

const TaskList = () => {
  // Estado para almacenar las tareas
  const [tasks, setTasks] = useState(() => {
    // Intenta cargar tareas guardadas en localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para marcar una tarea como completada
  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Función para añadir una nueva tarea (para conectar con TaskInput)
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
        tasks.map(task => (
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