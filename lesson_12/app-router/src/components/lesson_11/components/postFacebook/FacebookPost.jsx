import { useState } from "react";
import cl from "./FacebookPost.module.css";
export const FacebookPost = ({ foto, name, location, timeText, post }) => {
  let [likeItem, setLikeItem] = useState("");
  const onLike = () => {
    setLikeItem(+(likeItem += 1));
  };
  return (
    <div className={cl.post}>
      <img className={cl.image} src={foto} />
      <div style={{ width: "500px" }}>
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
              console.log("replay");
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
