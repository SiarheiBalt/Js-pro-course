import { Input } from "./Iinput/Input";
import cl from "./Converter.module.css";
import { useState } from "react";
export const Converter = () => {
  const [valueUsd, setValueUsd] = useState(0);
  const [valueByn, setValueByn] = useState(0);
  const onChangeUsd = (input) => {
    setValueByn(input);
    setValueUsd(input === "" ? 0 : (input *= 2.58).toFixed(2));
  };
  const onChangeByn = (input) => {
    setValueUsd(input);
    setValueByn(input === "" ? 0 : (input /= 2.58).toFixed(2));
  };
  return (
    <div className={cl.converter}>
      <h4>Live currently converter</h4>
      <div>
        $
        <Input value={valueByn} onChange={onChangeUsd} />
      </div>
      <hr />
      <div>
        BYN
        <Input value={valueUsd} onChange={onChangeByn} />
      </div>
    </div>
  );
};
