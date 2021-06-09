import styled from "styled-components";
import { useState } from "react";

export const FacebookPost = ({ foto, name, location, timeText, post }) => {
  let [likeItem, setLikeItem] = useState("");
  const onLike = () => {
    setLikeItem(+(likeItem += 1));
  };
  return (
    <Post>
      <img style={{ width: "150px" }} src={foto} />
      <div style={{ width: "500px" }}>
        <Person>
          <div style={{ color: "blue", fontWeight: "600" }}>{name}</div>
          <div style={{ color: "gray", marginLeft: "15px" }}> {location}</div>
        </Person>
        <Text>{post}</Text>
        <Footer>
          <Button onClick={onLike}>Like {likeItem}</Button>
          <Button onClick={() => {}}>Reply</Button>
          <div style={{ color: "gray", marginLeft: "15px" }}>{timeText}</div>
        </Footer>
      </div>
    </Post>
  );
};
const Post = styled.div`
  display: flex;
  background-color: aliceblue;
  padding: 10px;
`;
const Button = styled.button`
  color: blue;
  font-weight: 600;
  border: none;
  background-color: aliceblue;
`;
const Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 40px;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 5px;
`;
const Text = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  margin: 15px 40px;
  display: flex;
`;
