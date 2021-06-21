import { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";
import { CarouselEl } from "./CarouselEl";

export const CarouselList = () => {
  const [page, setPage] = useState([]);

  const [positionLeft, setPositionLeft] = useState(0);

  useEffect(() => {
    const arr = new Array(10).fill(0).map((el, i) => (el = i + 1));
    setPage(
      arr.reduce((acc, el, i) => {
        acc.push({ value: el });
        return acc;
      }, [])
    );
  }, []);

  const onClick = (e) => {
    if (e.target.innerText === "<") {
      positionLeft < 0 && setPositionLeft(positionLeft + 170);
    }
    if (e.target.innerText === ">") {
      positionLeft > -1000 && setPositionLeft(positionLeft - 170);
    }
  };

  return (
    <Carosel>
      <Mask>
        <Flex positionLeft={positionLeft}>
          {page.map((el, i) => (
            <CarouselEl key={i} number={el.value} />
          ))}
        </Flex>
      </Mask>

      <div>
        <button onClick={onClick}>{"<"}</button>
        <button onClick={onClick}>{">"}</button>
      </div>
    </Carosel>
  );
};

const Flex = styled.div`
  display: flex;
  margin-left: ${({ positionLeft }) => `${positionLeft}px`};
  transition: all 0.2s;
`;
const Carosel = styled.div`
  margin: 30px;
  & button {
    color: black;
    font-weight: 600;
    background-color: whitesmoke;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: 15px;
  }
  & button:active {
    background-color: rgb(145, 216, 244);
  }
`;
const Mask = styled.div`
  border: 1px solid gray;
  width: 682px;
  display: flex;
  overflow: hidden;
`;
