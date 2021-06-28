import styled from "styled-components";

export const Modal = ({ onCloseModal, user }) => {
  return (
    <Background onClick={() => onCloseModal()}>
      <Container onClick={(event) => event.stopPropagation()}>
        <button className="button" onClick={() => onCloseModal()}>
          <img
            style={{ width: "20px", height: "20px" }}
            src="https://e7.pngegg.com/pngimages/628/1018/png-clipart-x-mark-symbol-computer-icons-w-miscellaneous-cross.png"
            alt=""
          />
        </button>
        <h5>{user.name}</h5>
        <ol>
          <li>email: {user.email}</li>
          <li>phone: {user.phone}</li>
          <li>website: {user.website}</li>
          <li>
            {user.address.city}, {user.address.street} str.
          </li>
          <li>{user.company.name} company</li>
        </ol>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000000cc;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  border-radius: 12px;
  width: 400px;
  height: 300px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  & ol {
    color: red;
  }
  & li:nth-child(2n) {
    background: #e4e4e4;
  }
  & .button {
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    background-color: rgb(241, 241, 241);
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
  }
`;
