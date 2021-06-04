import cl from "./Input.module.css";

export const Button = ({ submit, action }) => {
  const onClick = () => {
    submit();
  };

  return (
    <div>
      <button onClick={onClick}>{action}</button>
    </div>
  );
};
