import { useState } from "react";
import { Button } from "../../header/input/Button";

export const LiCurrent = ({ currentDeal, onClickButton }) => {
  const [checked, setChecked] = useState(false);

  const onClickCheckbox = () => {
    currentDeal.checked = !checked;
    setChecked(!checked);
  };

  const onClickBut = () => {
    onClickButton(currentDeal.id);
  };
  return (
    <li style={{ textDecoration: checked ? "line-through" : "none" }}>
      <input type="checkbox" checked={checked} onChange={onClickCheckbox} />
      {currentDeal.item}
      <Button submit={onClickBut} action={"Remove"} />
    </li>
  );
};
