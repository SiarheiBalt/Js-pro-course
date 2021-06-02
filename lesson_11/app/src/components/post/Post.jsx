import cl from "./Post.module.css";
export const Post = ({ title, subtitle, autor }) => {
  return (
    <div className={cl.post}>
      <h4>{title}</h4>
      <span className={cl.span}>{subtitle}</span>
      <div className={cl.div_autor}>
        Autor: <div className={cl.autor}>{autor}</div>
      </div>
    </div>
  );
};
