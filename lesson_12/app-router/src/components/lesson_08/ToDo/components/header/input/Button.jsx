import cl from "./Input.module.css";

export const Button = ({ submit, action, disabled }) => {
  const onClick = () => {
    submit();
  };

  return (
    <div>
      <button
        disabled={disabled}
        style={{ backgroundColor: disabled ? "rgb(229 229 229)" : "" }}
        onClick={onClick}
      >
        {action}
      </button>
    </div>
  );
};
