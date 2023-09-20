import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { Container } from "@material-ui/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TasksList />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/createTask",
    element: <TaskForm />,
    errorElement: <h1>404</h1>,
  },
  {
    path: "/editTask/:id",
    element: <TaskForm />,
    errorElement: <h1>404</h1>,
  },
]);

const App = () => {
  return (
    <>
      <>
        <RouterProvider router={router} />
      </>
    </>
  );
};

export default App;
