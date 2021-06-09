import { Input } from "./Iinput/Input";
import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import styled from "styled-components";

export const Converter = () => {
  const theme = useContext(ThemeContext);

  const [valueUsd, setValueUsd] = useState(0);
  const [valueByn, setValueByn] = useState(0);
  const [themeConverter, setThemeConverter] = useState(theme.light);

  const onChangeUsd = (input) => {
    setValueByn(input);
    setValueUsd(input === "" ? 0 : (input *= 2.58).toFixed(2));
  };
  const onChangeByn = (input) => {
    setValueUsd(input);
    setValueByn(input === "" ? 0 : (input /= 2.58).toFixed(2));
  };
  const onChangeTheme = () => {
    setThemeConverter(
      themeConverter === theme.light ? theme.dark : theme.light
    );
  };

  return (
    <ConverterDiv themeConverter={themeConverter}>
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
      <button onClick={onChangeTheme}>Change theme</button>
    </ConverterDiv>
  );
};

const ConverterDiv = styled.div`
  margin: 50px;
  width: 230px;
  height: 200px;
  border: solid gray 1px;
  border-radius: 3px;
  background-color: ${({ themeConverter }) => themeConverter.background};
  color: ${({ themeConverter }) => themeConverter.color};
`;
