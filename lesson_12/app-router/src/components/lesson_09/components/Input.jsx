import cl from "./../App.module.css";
export const Input = ({ updateInput, onchngeInput }) => {
  const onChange = (event) => {
    onchngeInput(event);
  };

  return (
    <div>
      <input className={cl.input} value={updateInput} onChange={onChange} />
    </div>
  );
};
