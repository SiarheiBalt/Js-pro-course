import cl from "./App.module.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import store from "./Store";
import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Arhive } from "./components/Arhive/Arhive";
import { Button } from "./components/header/input/Button";

function AppToDo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let storage = localStorage.getItem("todos");
    setTodos(storage ? JSON.parse(storage) : []);
  }, []);

  const [textInput, setTextInput] = useState("");

  const submit = () => {
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
      store.state = [...todos, el];
      setTodos(store.getState());
    }
  };
  const onChangeInput = (event) => {
    setTextInput(event.target.value);
  };
  const onRemoveItem = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const onSelectedLi = () => {
    setTodos(todos.concat());
  };
  const onChekedLi = () => {
    setTodos(todos.concat());
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
        {/* <Switch> */}
        <Route
          exact
          path="/Main"
          render={() => (
            <Main
              todos={todos}
              onRemoveItem={onRemoveItem}
              onSelectedLi={onSelectedLi}
              onChekedLi={onChekedLi}
            />
          )}
        />
        <Route exact path="/">
          <Redirect to="/Main" />
        </Route>
        <Route path="/Arhive" render={() => <Arhive />} />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default AppToDo;
