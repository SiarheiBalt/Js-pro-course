import cl from "./Post.module.css";

export const Post = ({ title, postText, autor, addClass }) => {
  const className =
    addClass === "hide" ? `${cl.hide} ${cl.post}` : `${cl.show} ${cl.post}`;
  return (
    <div className={className}>
      <h4>{title}</h4>
      <h6>{autor}</h6>
      <div className={cl.text}>
        <span>{postText}</span>
      </div>
    </div>
  );
};
