import { useState } from "react";
import styled from "styled-components";

export const CarouselEl = ({ number }) => {
  return (
    <Square>
      <h3>{number}</h3>
    </Square>
  );
};

const Square = styled.div`
  width: 150px;
  height: 150px;
  background-color: red;
  margin: 10px;
`;
