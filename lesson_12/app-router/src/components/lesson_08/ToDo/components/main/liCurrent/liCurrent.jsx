import { useState } from "react";
import { Button } from "../../header/input/Button";

export const LiCurrent = ({
  currentDeal,
  onRemoveItem,
  onSelectedLi,
  onChekedLi,
}) => {
  const [checked, setChecked] = useState(currentDeal.checked);
  const [selected, setSelected] = useState(currentDeal.selected);
  const onClickCheckbox = (event) => {
    currentDeal.checked = !checked;
    setChecked(!checked);
    onChekedLi();
  };
  const onClickSelect = (event) => {
    if (event?.target.type !== "checkbox" && event?.target.type !== "submit") {
      currentDeal.selected = !selected;
      setSelected(!selected);
      onSelectedLi();
    }
  };
  const onClickBut = () => {
    onRemoveItem(currentDeal.id);
  };
  return (
    <li
      onClick={onClickSelect}
      style={{
        textDecoration:
          checked || currentDeal.checked ? "line-through" : "none",
        backgroundColor: selected || currentDeal.selected ? "#80deea" : "",
      }}
    >
      <input type="checkbox" checked={checked} onChange={onClickCheckbox} />
      {currentDeal.item}
      <Button submit={onClickBut} action={"Remove"} />
    </li>
  );
};
