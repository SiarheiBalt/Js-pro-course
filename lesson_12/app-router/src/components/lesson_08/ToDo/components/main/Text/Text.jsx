import cl from "./Text.module.css";
export const Text = ({ all, checked }) => {
  return (
    <div>
      <div
        className={cl.text}
        style={{ display: all === 0 ? "none" : "block" }}
      >
        All ToDo: {all}
      </div>
      <div
        className={cl.text}
        style={{ display: checked === 0 ? "none" : "block" }}
      >
        ALL finished: {checked}
      </div>
    </div>
  );
};
