import cl from "./Main.module.css";
import { LiCurrent } from "./liCurrent/liCurrent";
import { Button } from "../header/input/Button";
import { Text } from "./Text/Text";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../../../../redux/reducers/constants";

export const Main = ({ todos }) => {
  const dispatch = useDispatch();

  const checkSelected = () => {
    todos.map((todo) =>
      todo.selected && !todo.checked
        ? dispatch({ type: ACTIONS.SET_CHECKED, id: todo.id })
        : todo
    );
  };
  const removeSelected = () => {
    todos.map((todo) =>
      todo.selected
        ? dispatch({ type: ACTIONS.REMOVE_TODO, id: todo.id })
        : todo
    );
  };

  return (
    <div>
      <ul>
        {todos &&
          todos.map((el, i) => (
            <LiCurrent
              key={Math.random().toString(36).substr(2, 9)}
              currentDeal={el}
            />
          ))}
      </ul>
      <div className={cl.flex}>
        <div className={cl.ceil}>
          <Button
            disabled={todos.length === 0 || !todos.some((el) => el.selected)}
            submit={removeSelected}
            action={"Remove marked"}
          />
        </div>
        <div className={cl.ceil}>
          <Button
            disabled={todos.length === 0 || !todos.some((el) => el.selected)}
            submit={checkSelected}
            action={"Complet marked"}
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
