import cl from "./App.module.css";
import { Image } from "./components/image/Image";
import { ImageList } from "./components/imageList/ImageList";

function AppPictures() {
  return (
    <div className={cl.App}>
      <ImageList />
    </div>
  );
}

export default AppPictures;
