import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";
import { Post } from "../post/Post";
import { Preloader } from "../Preloader/Preloader";
import cl from "./PostList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS_POSTS } from "../../../../../redux/reducers/constants";

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer);
  let history = useHistory();

  useEffect(async () => {
    dispatch({ type: ACTIONS_POSTS.GET_POSTS_REQUEST });
  }, []);

  const onClickAddPosts = () => {
    dispatch({ type: ACTIONS_POSTS.SHOW_MORE });
  };
  const onClickAutor = (e) => {
    dispatch({ type: ACTIONS_POSTS.OPEN_MODAL, event: e });
  };
  const onCloseModal = () => {
    dispatch({ type: ACTIONS_POSTS.CLOSE_MODAL });
  };
  const onClickGetInfo = (autorId) => {
    history.push(`/lesson_10/Info/${autorId}`);
  };

  return (
    <div>
      {!posts.loading && <Preloader />}
      {posts.isModal && (
        <Modal onCloseModal={onCloseModal} user={posts.autor} />
      )}
      <div className={cl.grid}>
        {posts.posts.map((element) => (
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
      {posts.loading && (
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
