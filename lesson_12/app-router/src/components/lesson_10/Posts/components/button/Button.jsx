import cl from "./Button.module.css";
export const Button = ({ onClick, text, addClass }) => {
  const className =
    addClass === "hide" ? `${cl.hide} ${cl.button}` : `${cl.show} ${cl.button}`;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
