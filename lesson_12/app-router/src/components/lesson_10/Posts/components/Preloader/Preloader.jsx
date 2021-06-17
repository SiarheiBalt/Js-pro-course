import preloader from "./Preloader.png";
import styled from "styled-components";

export const Preloader = () => {
  return (
    <Pre>
      <img src={preloader} />
    </Pre>
  );
};

const Pre = styled.div`
  width: 100vh;
  margin: 25px;
`;
