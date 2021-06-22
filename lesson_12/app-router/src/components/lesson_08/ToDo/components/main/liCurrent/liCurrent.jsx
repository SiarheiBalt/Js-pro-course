import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../../../../../redux/reducers/constants";
import { Button } from "../../header/input/Button";

export const LiCurrent = ({ currentDeal }) => {
  const dispatch = useDispatch();

  const onClickCheckbox = () => {
    dispatch({ type: ACTIONS.SET_CHECKED, id: currentDeal.id });
  };

  const onClickSelect = (event) => {
    if (event?.target.type !== "checkbox" && event?.target.type !== "submit") {
      dispatch({ type: ACTIONS.SET_SELECTED, id: currentDeal.id });
    }
  };
  const onClickBut = () => {
    dispatch({ type: ACTIONS.REMOVE_TODO, id: currentDeal.id });
  };
  return (
    <li
      onClick={onClickSelect}
      style={{
        textDecoration: currentDeal.checked ? "line-through" : "none",
        backgroundColor:
          currentDeal.selected || currentDeal.selected ? "#80deea" : "",
      }}
    >
      <input
        type="checkbox"
        checked={currentDeal.checked}
        onChange={onClickCheckbox}
      />
      {currentDeal.item}
      <Button submit={onClickBut} action={"Remove"} />
    </li>
  );
};
