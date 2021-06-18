import styled from "styled-components";

const Education = ({ content }) => {
  return (
    <ul>
      {content.map((el) => (
        <Li>
          <p>
            <span>{el}</span>
          </p>
        </Li>
      ))}
    </ul>
  );
};

export default Education;

const Li = styled.li`
  margin-left: -25px;
  text-align: left;
  text-indent: 1.5em;
`;
