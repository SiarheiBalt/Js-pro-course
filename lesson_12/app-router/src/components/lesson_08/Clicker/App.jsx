import cl from "./App.module.css";
import { Clicker } from "./components/Clicker";

function App8() {
  return (
    <div className={cl.App}>
      <Clicker />
      <Clicker />
      <Clicker />
    </div>
  );
}

export default App8;
