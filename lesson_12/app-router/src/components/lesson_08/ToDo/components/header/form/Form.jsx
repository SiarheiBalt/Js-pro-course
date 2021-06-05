import { Button } from "../input/Button";
import { Input } from "../input/Input";
import cl from "./../Header.module.css";

export const Form = ({ text, onChangeInput, submit }) => {
  return (
    <div className={cl.form_input}>
      <Input text={text} onChangeInput={onChangeInput} />
      <Button submit={submit} action={"Add"} />
    </div>
  );
};
