import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="container_card">
        <h1 classname="title">React Task-list ✅</h1>
        <div className="item">
          <TaskInput />
          <TaskList />
          <TaskItem />
        </div>
      </div>
    </div>
  );
};

export default App;
