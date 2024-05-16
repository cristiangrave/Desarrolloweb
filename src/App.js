import React, { useState } from "react";
import MyNavbar from "./components/Navbar";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initaddtodo } from "./reducers/goalsSlice";
import { initaddgoals } from "./reducers/tasksSlice";
const App = () => {
  /*Añadiendo el el backend al fronted  */
  const goals = useSelector((state) => state.goals);
  const [view, setView] = useState("goals");
  const dispatch = useDispatch();
  const handleNavClick = (selectedView) => {
    setView(selectedView);
  };
  function initFetch() {
    fetch("http://localhost:3001/tasks/task/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        Authorization: "pato",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) =>
        res.map((tasks) => {
          dispatch(initaddtodo(tasks));
        })
      )
      .catch((res) => console.log(res));
  }
  /**este lo que hara es llamar a la funcion principal y luego va llenar la pagina con los datos del backend */
  useEffect(() => {
    initFetch(); //y listo aqui llamamos a la funcion
  }, []);
  return (
    <div className="App">
      <MyNavbar onViewChange={handleNavClick} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="sticky-top" style={{ top: 80 }}>
              {view === "goals" && <GoalForm />}
              {view === "tasks" && <TaskForm />}
            </div>
          </div>
          <div className="col-md-6">
            <div className="goal-list-container">
              {view === "goals" && <GoalList goals={goals} />}
              {view === "tasks" && <TaskList />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
