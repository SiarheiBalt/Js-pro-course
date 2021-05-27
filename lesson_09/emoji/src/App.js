import logo from './logo.svg';
import './App.css';
import { store } from './Store';
import { EmojiList } from './components/EmojiList';
import { Input } from './components/Input';
import { useState } from 'react';

function App() {
  let [updateInput, setInput] = useState('');
  let [main, setMain] = useState(store.getState(1000));

  const onchngeInput = (event) => {
    setInput(event.target.value);
    if (event.target.value.length > 0) {
      setMain(filter(event, main));
    } else {
      setMain(store.getState(1000))
    }
  } 
  const filter = (event, arr) => {
    return arr.filter((el) => {
      let index = event.target.value.length - 1
      if (el.title[index] !== undefined && el.title[index].toString().toLowerCase() === event.target.value[index].toString().toLowerCase()) {
        return el
      }
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <EmojiList state={store.getState(5)} />
      </header>
      <main>
        <Input updateInput={updateInput} onchngeInput={onchngeInput} />
        <EmojiList state={main} />
      </main>
    </div>
  );
}

export default App;
