import { useState } from "react";
import { Button } from "./Button";
import cl from "./Clicker.module.css";
import { Title } from "./Title";

export const Clicker = () => {
  const [item, setItem] = useState(0);

  const click = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.innerHTML === "+") setItem(item + 1);
    if (event.currentTarget.innerHTML === "-") setItem(item - 1);
    if (event.currentTarget.innerHTML === "R") setItem(item - item);
  };

  return (
    <div className={cl.clicker}>
      <Title item={item} />
      <div className={cl.buttons}>
        <Button action="+" onClick={click} />
        <Button action="R" onClick={click} />
        <Button action="-" onClick={click} />
      </div>
    </div>
  );
};
