import './style.css';

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-content">
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-item-actions">
        <button 
          onClick={() => onToggleStatus(task.id)} // Cambiar estado de completado
          className="complete-btn"
        >
          Realizado
        </button>
        <button 
          onClick={() => onDeleteTask(task.id)} // Eliminar tarea por ID
          className="delete-btn"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;