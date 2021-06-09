import { useEffect, useState } from "react";
import cl from "./Image.module.css";

export const Image = ({ url, title }) => {
  const [isBig, setIsBig] = useState(false);

  const classes = isBig ? cl.isBig : "";

  return (
    <div>
      <div>{title}</div>
      <a onClick={() => setIsBig(!isBig)}>
        <img src={url} className={classes} />
      </a>
    </div>
  );
};
