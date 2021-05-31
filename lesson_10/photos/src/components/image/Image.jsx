import { useEffect } from "react";
import cl from "./Image.module.css";
export const Image = ({ url, title, onClick }) => {
  return (
    <div>
      <div>{title}</div>
      <a href="#" onClick={onClick}>
        <img src={url} />
      </a>
    </div>
  );
};
