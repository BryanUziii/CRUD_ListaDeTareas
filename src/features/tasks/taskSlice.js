import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    tittle: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    tittle: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, tittle, description } = action.payload;

      const taskFound = state.find((task) => task.id === id);

      if (taskFound) {
        taskFound.tittle = tittle;
        taskFound.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
