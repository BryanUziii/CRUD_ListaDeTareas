import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";

import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/TaskForm.css";
import { Button, TextField, withStyles } from "@material-ui/core";

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const allTasks = useSelector((state) => state.tasks);

  const [task, setTask] = useState({
    tittle: "",
    description: "",
  });

  const { tittle, description } = task;

  const handleChange = (e) => {
    // console.log(e.target.value);

    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
          completed: false,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(allTasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="divForm">
      <div className="divFormContent">
        <TextField
          type="text"
          name="tittle"
          variant="filled"
          label="tittle"
          value={tittle}
          onChange={handleChange}
        />

        <TextField
          type="text"
          name="description"
          variant="filled"
          label="description"
          multiline
          rows={4}
          value={description}
          onChange={handleChange}
        />

        <Button color="primary" variant="contained" type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
