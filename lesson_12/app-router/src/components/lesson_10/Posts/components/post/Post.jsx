import cl from "./Post.module.css";
import styled from "styled-components";

export const Post = ({ title, postText, autor, addClass, onClickAutor }) => {
  const className =
    addClass === "hide" ? `${cl.hide} ${cl.post}` : `${cl.show} ${cl.post}`;

  const onClick = (e) => {
    onClickAutor(e);
  };
  return (
    <div className={className}>
      <h4>{title}</h4>
      <H5 onClick={onClick}>{autor}</H5>
      <div className={cl.text}>
        <span>{postText}</span>
      </div>
    </div>
  );
};

const H5 = styled.h5`
  cursor: pointer;
  &:hover {
    color: gray;
    background: rgb(158, 208, 214);
  }
`;
