import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";

import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

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

    dispatch(
      addTask({
        ...task,
        id: uuid(),
        completed: false,
      })
    );

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tittle"
        placeholder="tittle"
        value={tittle}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="description"
        value={description}
        onChange={handleChange}
      />

      <button>save</button>
    </form>
  );
};

export default TaskForm;
