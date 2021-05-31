import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { Post } from "../post/Post";
import cl from "./PostList.module.css";

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const responseP = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsResponse = await responseP.json();
    const responseU = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersResponse = await responseU.json();
    postsResponse.map((element, i) => {
      i < 5 ? (element.class = "show") : (element.class = "hide");
      usersResponse.forEach((el) => {
        if (el.id === element.id) {
          element.name = el.name;
          return element;
        }
      });
    });
    setPosts(postsResponse);
  }, []);
  const onClick = () => {
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
  return (
    <div>
      <div className={cl.grid}>
        {posts.map((element) => (
          <Post
            key={Math.random().toString(36).substr(2, 9)}
            title={element.title}
            postText={element.body}
            autor={element.name}
            addClass={element.class}
          />
        ))}
      </div>
      <Button
        onClick={onClick}
        text="Show more"
        addClass={
          posts[posts.length - 1] && posts[posts.length - 1].class === "show"
            ? "hide"
            : "show"
        }
      />
    </div>
  );
};
