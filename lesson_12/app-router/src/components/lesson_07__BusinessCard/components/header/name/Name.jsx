import cl from "./Name.module.css";

export const Name = (props) => {
  return (
    <div className={cl.name}>
      <h3 className={cl.h3}>{props.fullName}</h3>
    </div>
  );
};
