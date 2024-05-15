import { createSlice } from "@reduxjs/toolkit";

export const goalsSlice = createSlice({
  name: "goals",
  initialState: {
    value: [
      {
        name: "Graduarme del TDS",
        description: "Ganar los Cursos",
        dueDate: "01-12-24",
      },
    ],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
      /*aqui se agrega la peticion a nuestro backend o nuestros endpoints*/
      fetch("http://localhost:3001/tasks/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json",
          "Authorization": "pato"
        },
        body: JSON.stringify(action.payload)
      }).catch((err) => { 
        console.log(err)
      });
    },
  },
});

export const { addGoal,removeGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
