import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import "./App.css";

/**El componente TaskList ya maneja internamente sus tareas
 * por lo que no es necesario añadir estado aquí, ya que TaskList lo gestiona
 */
  

const App = () => {
  return (
    <div className="container">
      <div className="container_card">
        <h1 className="title">React Task-list ✅</h1>
        <div className="item">
          <TaskList /> {/* TaskList ya incluye TaskInput */}
        </div>
      </div>
    </div>
  );
};

export default App;

/* 
NOTA IMPORTANTE: 
Para una integración más completa, se podría modificar App.jsx para manejar el estado 
de las tareas y pasar ese estado a TaskInput y TaskList mediante props. Sin embargo,
para mantener una integración menos invasiva, se ha diseñado TaskList para ser
independiente y gestionar su propio estado, lo que permite agregarlo al proyecto.*/