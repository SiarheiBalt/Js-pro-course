import cl from "./App.module.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Arhive } from "./components/Arhive/Arhive";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../../redux/reducers/constants";

function AppToDo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todolistReducer.todos);
  const [textInput, setTextInput] = useState("");

  const submit = (e) => {
    if (!textInput) {
      alert("String can't be empty...");
    } else {
      let idtoDo = Math.random().toString(36).substr(2, 9);
      setTextInput("");
      let el = {
        id: idtoDo,
        item: textInput,
        finished: false,
        cheked: false,
        selected: false,
      };
      dispatch({ type: ACTIONS.ADD_TODO, el });
    }
  };
  const onChangeInput = (event) => {
    setTextInput(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos ? todos : []));
  }, [todos]);

  return (
    <BrowserRouter basename={"lesson_08/ToDo"}>
      <div className={cl.app}>
        <Header
          submit={submit}
          text={textInput}
          onChangeInput={onChangeInput}
        />
        <Route exact path="/Main" render={() => <Main todos={todos} />} />
        <Route exact path="/">
          <Redirect to="/Main" />
        </Route>
        <Route path="/Arhive" render={() => <Arhive />} />
      </div>
    </BrowserRouter>
  );
}

export default AppToDo;
