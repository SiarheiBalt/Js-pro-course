import cl from "./App.module.css";
import { PostList } from "./components/postList/PostList";

function AppPosts() {
  return (
    <div className={cl.App}>
      <PostList />
    </div>
  );
}

export default AppPosts;
