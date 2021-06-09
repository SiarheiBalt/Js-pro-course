import styled from "styled-components";

export const Post = ({ title, subtitle, autor }) => {
  return (
    <Background>
      <h4>{title}</h4>
      <span>{subtitle}</span>
      <AutorWrapper>
        Autor: <div style={{ color: "blue" }}>{autor}</div>
      </AutorWrapper>
    </Background>
  );
};

const Background = styled.div`
  border: solid rgb(196, 196, 196) 1px;
  width: 145px;
  margin: 20px auto;
  border-radius: 5px;
`;
const AutorWrapper = styled.div`
  background-color: rgb(247, 247, 247);
  border-radius: 0 0 5px 5px;
  margin-top: 12px;
`;
