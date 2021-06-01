import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import store from "./Store";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Arhive } from "./components/Arhive/Arhive";

function App() {
  const [todos, setTodos] = useState(store.getState().current);
  const [textInput, setTextInput] = useState();

  const submit = () => {
    if (!textInput) {
      alert("String can't be empty...");
    } else {
      let idtoDo = Math.random().toString(36).substr(2, 9);
      setTextInput("");
      let el = { id: idtoDo, item: textInput, finished: false, cheked: false };
      store.state = [...todos, el];
      setTodos(store.getState());
    }
  };
  const onChangeInput = (event) => {
    setTextInput(event.target.value);
  };
  const onClickButton = (id) => {
    setTodos(
      todos.reduce((acc, el) => {
        if (el.id !== id) acc.push(el);
        return acc;
      }, [])
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          submit={submit}
          text={textInput}
          onChangeInput={onChangeInput}
        />
        <Route
          path="/Main"
          render={() => <Main todos={todos} onClickButton={onClickButton} />}
        />
        <Route path="/Arhive" render={() => <Arhive />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
