import cl from "./Main.module.css";
import { LiCurrent } from "./liCurrent/liCurrent";

export const Main = ({ todos, onClickButton }) => {
  //    debugger
  return (
    <div>
      <ul>
        {todos.map((el, i) => (
          <LiCurrent
            key={Math.random().toString(36).substr(2, 9)}
            currentDeal={el}
            onClickButton={onClickButton}
          />
        ))}
      </ul>
    </div>
  );
};
