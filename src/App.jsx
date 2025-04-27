import { useState } from "react";

import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { TaskItem } from "./components/TaskItem";

import "./App.css";

const App = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
      <TaskItem />
    </>
  );
};

export default App;
