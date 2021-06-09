import { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";
import { CarouselEl } from "./CarouselEl";

export const CarouselList = () => {
  const [page, setPage] = useState([]);

  useEffect(() => {
    const arr = new Array(10).fill(0).map((el, i) => (el = i + 1));
    setPage(
      arr.reduce((acc, el, i) => {
        acc.push({ value: el, show: i < 3 ? true : false });
        return acc;
      }, [])
    );
  }, []);

  const onClick = (e) => {
    if (e.target.innerText === ">") {
    }
  };

  return (
    <Carosel>
      <Flex>
        {page.map((el, i) => (
          <CarouselEl key={i} number={el.value} show={el.show} />
        ))}
      </Flex>
      not working yet
      <div>
        <button onClick={onClick}>{"<"}</button>
        <button onClick={onClick}>{">"}</button>
      </div>
    </Carosel>
  );
};

const Flex = styled.div`
  display: flex;
`;
const Carosel = styled.div`
  & button {
    color: black;
    font-weight: 600;
    background-color: whitesmoke;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 10px;
  }
  & button:active {
    background-color: rgb(145, 216, 244);
  }
`;
