import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import store from './Store';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Arhive } from './components/Arhive/Arhive';

function App() {
  const [todos, setTodos] = useState(store.getState().current)
  const [textInput, setTextInput] = useState()

  
  const onClickInput = () => {
    if (!textInput) {
      alert("String can't be empty...")
    } else {
      let idtoDo = (new Date().getMilliseconds()) + (new Date().getMilliseconds());
      setTextInput('');
      let el = { id: idtoDo, item: textInput, finished: false }
      setTodos([...todos, el])
    }
  }
  const onChangeInput = (event) => {
    setTextInput(event.target.value);
  }
  
  return (
    <BrowserRouter>
      <div className="app">
        <Header onClick={onClickInput} text={textInput} onChange={onChangeInput} />
        <Route path="/Main" render={ () => <Main todos={todos}/>} />
        <Route path="/Arhive" render={ () => <Arhive />} />
      </div>

    </BrowserRouter>
  );
}

export default App;
