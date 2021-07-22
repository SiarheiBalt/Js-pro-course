import cl from "./Button.module.css";

interface IProps {
  action: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ action, onClick }: IProps) => {
  let addClass = "";
  if (action === "R") addClass = cl.reset;
  if (action === "-") addClass = cl.minus;

  return (
    <div>
      <button className={addClass} onClick={onClick}>
        {action}
      </button>
    </div>
  );
};
