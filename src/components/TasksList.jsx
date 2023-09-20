import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

import "../styles/TaskList.css";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <Container className="divMostrarTareas">
      <div className="divMostrarTareasContent">
        <div className="divCrearTask">
          <Typography component="h2" variant="h4">
            Tareas Pendientes: {tasks.length}
          </Typography>
          <Link to="/createTask">
            <Button color="inherit" variant="contained" className="btnAgregar">
              Create task
            </Button>
          </Link>
        </div>
        <div className="divAllTasks">
          {tasks.map((task) => (
            <div className="divTask" key={task.id}>
              <Typography component="h3" variant="h5">
                {task.tittle}
              </Typography>
              <Typography component="p">{task.description}</Typography>

              <div className="divBotones">
                <Link to={`/editTask/${task.id}`}>
                  <Button
                    color="inherit"
                    variant="contained"
                    className="btnEditar"
                  >
                    Editar
                  </Button>
                </Link>
                <Button
                  color="secondary"
                  variant="contained"
                  className="btnEliminar"
                  onClick={() => handleDelete(task.id)}
                >
                  Borrar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TasksList;
