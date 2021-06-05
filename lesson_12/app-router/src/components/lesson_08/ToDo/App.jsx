import cl from "./App.module.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import store from "./Store";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Arhive } from "./components/Arhive/Arhive";
import { Button } from "./components/header/input/Button";

function AppToDo() {
  let storage = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    storage === "null" || storage === "undefined"
      ? store.getState().current
      : JSON.parse(storage)
  );
  const [textInput, setTextInput] = useState();

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
    setTodos(
      todos.reduce((acc, el) => {
        if (el.id !== id) acc.push(el);
        return acc;
      }, [])
    );
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
    <BrowserRouter>
      <div className={cl.app}>
        <Header
          submit={submit}
          text={textInput}
          onChangeInput={onChangeInput}
        />
        <Switch>
          <Route
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
          <Route path="/Arhive" render={() => <Arhive />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppToDo;
