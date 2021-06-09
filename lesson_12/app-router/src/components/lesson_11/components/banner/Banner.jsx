import styled from "styled-components";

export const Banner = ({ title, background, category, commentCount }) => {
  return (
    <Wrapper background={background}>
      <Header>
        <Category>{category}</Category>
        <Comment>{commentCount} </Comment>
      </Header>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 250px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 90%;
  background-image: url(${({ background }) => background});
  &:hover {
    opacity: 75%;
  }
`;
const Comment = styled.div`
  background-repeat: no-repeat;
  background-size: 41px 33px;
  margin: 25px;
  width: 41px;
  height: 25px;
  color: rgb(255, 234, 0);
  background-color: black;
  opacity: 70%;
  border-radius: 3px;
  border: 1px solid rgb(255, 234, 0);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Category = styled.div`
  width: 60px;
  height: 28px;
  background-color: rgb(255, 234, 0);
  font-weight: 500;
  font-family: revert;
  margin: 25px;
`;
const Title = styled.div`
  color: rgb(255, 255, 255);
  font-weight: 650;
  font-family: revert;
  font-size: 1.25em;
  margin-bottom: 25px;
`;
