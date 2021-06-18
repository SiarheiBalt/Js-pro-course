import React, { useEffect, useState } from "react";
import { useHistory, BrowserRouter, Route } from "react-router-dom";
import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";
import { Post } from "../post/Post";
import { Preloader } from "../Preloader/Preloader";
import cl from "./PostList.module.css";
import { Info } from "../post/Info";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [user, setUser] = useState({});
  const [preloader, setPreloader] = useState(false);
  let history = useHistory();

  let autors;

  useEffect(async () => {
    setPreloader(true);
    const responseP = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsResponse = await responseP.json();
    const responseU = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersResponse = await responseU.json();
    autors = usersResponse;
    // debugger;
    const posts = postsResponse.map((post, i) => {
      i < 5 ? (post.class = "show") : (post.class = "hide");
      const user = usersResponse.find((user) => user.id === post.userId);
      return { ...post, user };
    });
    setPreloader(false);
    setPosts(posts);
  }, []);

  const onClickAddPosts = () => {
    let count = 5;
    setPosts(
      posts.map((el, i) => {
        if (el.class === "hide" && count > 0) {
          el.class = "show";
          count--;
        }
        return el;
      })
    );
  };
  const onClickAutor = (e) => {
    let autor = posts.find(
      (user) => user.user.name === e.target.innerText
    ).user;
    console.log(user);
    setIsModal(true);
    setUser(autor);
  };
  const onCloseModal = () => {
    setIsModal(false);
  };
  const onClickGetInfo = (autorId) => {
    history.push(`/lesson_10/Info/${autorId}`);
  };

  return (
    <div>
      {preloader && <Preloader />}
      {isModal && <Modal onCloseModal={onCloseModal} user={user} />}
      <div className={cl.grid}>
        {posts.map((element) => (
          <Post
            key={Math.random().toString(36).substr(2, 9)}
            title={element.title}
            postText={element.body}
            autor={element.user.name}
            addClass={element.class}
            onClickAutor={onClickAutor}
            onClickGetInfo={onClickGetInfo}
            autorId={element.user.id}
          />
        ))}
      </div>
      {!preloader && (
        <Button
          onClick={onClickAddPosts}
          text="Show more"
          addClass={
            posts[posts.length - 1] && posts[posts.length - 1].class === "show"
              ? "hide"
              : "show"
          }
        />
      )}
    </div>
  );
};
