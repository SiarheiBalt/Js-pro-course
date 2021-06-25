import { ACTIONS_POSTS } from "../reducers/constants";
import { takeEvery, call, put } from "redux-saga/effects";

function* getPostsSaga() {
  try {
    let autors;
    const responseP = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts")
    );
    const postsResponse = yield responseP.json();
    const responseU = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/users")
    );
    const usersResponse = yield responseU.json();
    autors = usersResponse;

    const posts = postsResponse.map((post, i) => {
      i < 5 ? (post.class = "show") : (post.class = "hide");
      const user = usersResponse.find((user) => user.id === post.userId);

      return { ...post, user };
    });
    yield put({
      type: ACTIONS_POSTS.GET_POSTS_SUCCESS,
      posts,
    });
  } catch (e) {}
}

export function* postSaga() {
  yield takeEvery(ACTIONS_POSTS.GET_POSTS_REQUEST, getPostsSaga);
}
