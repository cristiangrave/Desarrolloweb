import { createSlice } from '@reduxjs/toolkit';

export const goalsSlice = createSlice({
    name: 'goals',
    initialState: [],
    reducers: {
        addGoal: (state, action) => {
        state.push({ ...action.payload, id: Math.random() });
          /*aqui se agrega la peticion a nuestro backend o nuestros endpoints*/
        fetch("http://localhost:3001/goals/addGoal", {
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
        removeGoal: (state, action) => {
          fetch("http://localhost:3001/tasks/goals/removeGoal", +action.payload, {
          method: "DELETE",
          headers: {
            "Content-Type": "aplication/json",
          "Authorization": "pato"
         },
            }).catch((err) => { 
              console.log(err)
            });
       return state.filter(goal => goal.id !== action.payload);
        }
    },
});

export const { addGoal, removeGoal } = goalsSlice.actions;

export default goalsSlice.reducer;