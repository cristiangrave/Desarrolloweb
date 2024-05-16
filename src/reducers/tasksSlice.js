import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ ...action.payload, id: Math.random() });
      fetch("http://localhost:3001/tasks/addtasks", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
          Authorization: "pato",
        },
        body: JSON.stringify(action.payload),
      }).catch((err) => {
        console.log(err);
      });
    },
    removeTask: (state, action) => {
      fetch("http://localhost:3001/tasks/task/removetaks", +action.payload, {
        method: "DELETE",
        headers: {
          "Content-Type": "aplication/json",
          Authorization: "pato",
        },
      }).catch((err) => {
        console.log(err);
      });
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
