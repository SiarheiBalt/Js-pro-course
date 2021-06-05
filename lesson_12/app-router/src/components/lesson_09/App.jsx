import cl from "./App.module.css";
import { store } from "./Store";
import { EmojiList } from "./components/EmojiList";
import { Input } from "./components/Input";
import { useState } from "react";

function AppEmoji() {
  const [updateInput, setInput] = useState("");
  const [main, setMain] = useState(store.getState(100));

  const onchngeInput = (event) => {
    setInput(event.target.value);
    let data = store.getState(100).filter((el) => {
      return (
        el.title.toLowerCase().includes(event.target.value) ||
        el.keywords.toLowerCase().includes(event.target.value)
      );
    });
    setMain(data);
  };

  return (
    <div className={cl.App}>
      <header className={cl.App_header}>
        <EmojiList state={store.getState(5)} />
      </header>
      <main>
        <Input updateInput={updateInput} onchngeInput={onchngeInput} />
        <EmojiList state={main} />
      </main>
    </div>
  );
}

export default AppEmoji;
