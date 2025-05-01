import { useState, useEffect } from 'react';
import TaskItem from '../TaskItem';
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
      const newTask = {
        id: Date.now(), // Genera un ID único basado en timestamp
        title: taskTitle, 
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
  };

  // Mostrar mensaje si no hay tareas
  if (tasks.length === 0) {
    return (
      <div className="task-list-container empty">
        <p>No hay tareas pendientes</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={() => toggleTaskStatus(task.id)}
          onDeleteTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;