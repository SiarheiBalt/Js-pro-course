import logo from "./logo.svg";
import "./App.css";
import { Post } from "./components/post/Post";
import { store } from "./store";
import { FacebookPost } from "./components/postFacebook/FacebookPost";
import { useState } from "react";
import { Banner } from "./components/banner/Banner";
import { Converter } from "./components/converter/Converter";

function App() {
  const onClickLike = () => {
    console.log("like");
  };
  const onClickReply = () => {
    console.log("Replay");
  };
  const onClickBanner = () => {};
  return (
    <div className="App">
      <h1>1</h1>
      <Post
        title={store.state.posts[0].title}
        subtitle={store.state.posts[0].subtitle}
        autor={store.state.posts[0].autor}
      />
      <h1>2</h1>
      <FacebookPost
        foto={store.state.facebookPosts[0].userFoto}
        name={store.state.facebookPosts[0].name}
        location={store.state.facebookPosts[0].location}
        timeText={store.state.facebookPosts[0].timeText}
        post={store.state.facebookPosts[0].postDescription}
        onClickLike={onClickLike}
        onClickReply={onClickReply}
      />
      <h1>3</h1>
      <Banner
        title={store.state.banner[0].title}
        background={store.state.banner[0].backgroundImageUrl}
        category={store.state.banner[0].category}
        commentCount={store.state.banner[0].commentCount}
      />
      <h1>4</h1>
      <Converter />
    </div>
  );
}

export default App;
