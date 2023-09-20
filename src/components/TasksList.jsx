import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <Link to="/createTask">
        <Button color="primary" variant="contained">
          Create task
        </Button>
      </Link>
      <br />
      Task List: {tasks.length}
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.tittle}</h3>
            <p>{task.description}</p>

            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleDelete(task.id)}
            >
              Borrar
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TasksList;
