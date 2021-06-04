import { useState } from "react";
import cl from "./FacebookPost.module.css";
export const FacebookPost = ({
  foto,
  name,
  location,
  timeText,
  post,
  onClickLike,
  onClickReply,
}) => {
  let [likeItem, setLikeItem] = useState("");
  const onLike = () => {
    setLikeItem(+(likeItem += 1));
    onClickLike();
  };
  return (
    <div className={cl.post}>
      <img className={cl.image} src={foto} />
      <div style={{ width: "300px" }}>
        <div className={cl.person}>
          <div className={cl.name}>{name}</div>
          <div className={cl.location}> {location}</div>
        </div>
        <div className={cl.text}>{post}</div>
        <div className={cl.footer}>
          <button onClick={onLike} className={cl.button}>
            Like {likeItem}
          </button>
          <button
            onClick={() => {
              onClickReply();
            }}
            className={cl.button}
          >
            Reply
          </button>{" "}
          <div style={{ color: "gray", marginLeft: "15px" }}>{timeText}</div>
        </div>
      </div>
    </div>
  );
};
