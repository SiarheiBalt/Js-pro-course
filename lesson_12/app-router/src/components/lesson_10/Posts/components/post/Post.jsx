import cl from "./Post.module.css";
import styled from "styled-components";

export const Post = ({
  title,
  postText,
  autor,
  addClass,
  onClickAutor,
  onClickGetInfo,
  autorId,
}) => {
  const className =
    addClass === "hide" ? `${cl.hide} ${cl.post}` : `${cl.show} ${cl.post}`;

  const onClick = (e) => {
    onClickAutor(e);
  };
  const onClickInfo = (e) => {
    onClickGetInfo(autorId);
  };
  return (
    <DivPost className={className}>
      <h4 onClick={onClickInfo}>{title}</h4>
      <H5 onClick={onClick}>{autor}</H5>
      <div className={cl.text}>
        <span>{postText}</span>
      </div>
    </DivPost>
  );
};

const H5 = styled.h5`
  cursor: pointer;
  &:hover {
    color: gray;
    background: rgb(158, 208, 214);
  }
`;

const DivPost = styled.div`
  h4 {
    cursor: pointer;
    &: hover {
      background: #99cbd1;
    }
  }
`;
