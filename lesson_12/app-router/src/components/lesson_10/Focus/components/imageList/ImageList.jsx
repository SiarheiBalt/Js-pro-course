import { useEffect, useState } from "react";
import { Image } from "../image/Image";
import cl from "./image.module.css";

export const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const imagesResponse = await response.json();
    setImages(getImages(imagesResponse, 10));
  }, []);
  const getImages = (arr, number) => {
    return arr.reduce((acc, el, i) => {
      if (number > i) {
        el.style = "";
        acc.push(el);
      }
      return acc;
    }, []);
  };

  return (
    <div className={cl.grid}>
      {images.map((el) => (
        <Image
          key={Math.random().toString(36).substr(2, 9)}
          title={el.title}
          url={el.thumbnailUrl}
          style={el.style}
        />
      ))}
    </div>
  );
};
