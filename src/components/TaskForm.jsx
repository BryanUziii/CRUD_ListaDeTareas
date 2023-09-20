import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    tittle: "",
    description: "",
  });

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tittle"
        placeholder="tittle"
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
      />

      <button>save</button>
    </form>
  );
};

export default TaskForm;
