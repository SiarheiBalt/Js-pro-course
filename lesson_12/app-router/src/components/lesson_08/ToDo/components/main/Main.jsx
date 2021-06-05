import cl from "./Main.module.css";
import { LiCurrent } from "./liCurrent/liCurrent";
import { Button } from "../header/input/Button";
import { useEffect, useState } from "react";
import { Text } from "./Text/Text";

export const Main = ({ todos, onRemoveItem, onSelectedLi, onChekedLi }) => {
  return (
    <div>
      <ul>
        {todos &&
          todos.map((el, i) => (
            <LiCurrent
              key={Math.random().toString(36).substr(2, 9)}
              currentDeal={el}
              onRemoveItem={onRemoveItem}
              onSelectedLi={onSelectedLi}
              onChekedLi={onChekedLi}
            />
          ))}
      </ul>
      <div className={cl.flex}>
        <div className={cl.ceil}>
          <Button
            disabled={todos.length === 0 || !todos.some((el) => el.selected)}
            submit={"lll"}
            action={"Remove marked"}
          />
        </div>
        <div className={cl.ceil}>
          <Button
            disabled={todos.length === 0 || !todos.some((el) => el.selected)}
            submit={"lll"}
            action={"execute marked"}
          />
        </div>
        <div className={cl.ceil}>
          <Text
            all={todos.length}
            checked={todos.reduce((acc, el) => {
              if (el.checked) acc += 1;
              return acc;
            }, 0)}
          />
        </div>
      </div>
    </div>
  );
};
