import cl from "./Banner.module.css";
export const Banner = ({ title, background, category, commentCount }) => {
  return (
    <div
      className={cl.wrapper}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={cl.header}>
        <div className={cl.category}>{category}</div>
        <div className={cl.comment}>{commentCount} </div>
      </div>
      <div className={cl.title}>{title}</div>
    </div>
  );
};
