import cl from "./Button.module.css";

export const Button = ({ action, onClick }) => {
  let addClass = "";
  if (action === "R") {
    addClass = `${cl.reset} ${cl.button}`;
  } else if (action === "-") {
    addClass = `${cl.minus} ${cl.button}`;
  } else {
    addClass = `${cl.button}`;
  }

  return (
    <div>
      <button className={addClass} onClick={onClick}>
        {action}
      </button>
    </div>
  );
};
