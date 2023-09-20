import React from "react";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

const App = () => {
  return (
    <div>
      <h1>Hola</h1>

      <TaskForm />

      <TasksList />
    </div>
  );
};

export default App;
