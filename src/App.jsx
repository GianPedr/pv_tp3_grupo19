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
        <h1 classname="title">React Task-list ✅</h1>
        <div className="item">
          <TaskInput />
          <TaskList />
          {/*<TaskItem />*/} {/* Este componente se usa internamente en TaskList */}
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
independiente y gestionar su propio estado, lo que permite agregarlo al proyecto
existente sin necesidad de modificar significativamente otros componentes.

Si más adelante se desea una implementación más robusta, deberíamos considerar:
1. Elevar el estado de las tareas a App.jsx
2. Pasar ese estado y sus funciones de actualización como props a los componentes hijos
3. Modificar TaskInput para que se comunique con el estado global
 */