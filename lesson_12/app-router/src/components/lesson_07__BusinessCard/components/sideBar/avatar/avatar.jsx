import cl from "./../SideBar.module.css";

export const Avatar = (props) => {
  console.log(props.avatar);
  return (
    <div>
      <img className={cl.img} src={props.avatar}></img>
    </div>
  );
};
