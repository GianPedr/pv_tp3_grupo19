// Este archivo y su css, solo son a modo un ejemplo y son provicionales
import './style.css';

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-item-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleStatus}
          className="task-checkbox"
        />
        <span className="task-title">{task.title}</span>
      </div>
      <button 
        onClick={onDeleteTask}
        className="delete-btn"
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;