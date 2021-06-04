import { createRef, useRef } from "react";

export const Input = ({ onChange, value }) => {
  const onChangeInput = () => {
    onChange(inputValue.current.value);
  };
  const onClick = () => {
    inputValue.current.value = "";
    onChangeInput();
  };
  let inputValue = useRef(null);
  return (
    <div>
      <input
        ref={inputValue}
        value={value}
        onChange={onChangeInput}
        type="text"
        onClick={onClick}
      />
    </div>
  );
};
