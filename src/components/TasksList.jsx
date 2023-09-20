import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <div>
      TasksList
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.tittle}</h3>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
