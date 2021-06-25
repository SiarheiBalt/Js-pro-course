import { ACTIONS, ACTIONS_POSTS } from "./constants";

const defaultState = { posts: [], loading: true, error: false };

export const postsReducer = (state, action) => {
  //   switch (action.type) {
  //     case ACTIONS_POSTS.GET_POSTS_REQUEST: {
  //       return [];
  //     }
  switch (action.type) {
    case ACTIONS_POSTS.GET_POSTS_REQUEST: {
      return { ...state };
    }
    case ACTIONS_POSTS.GET_POSTS_SUCCESS: {
      return { ...state, posts: action.posts, loading: false, error: false };
    }
    case ACTIONS_POSTS.GET_POSTS_FAILURE: {
      return { ...state };
    }

    default:
      return defaultState;
  }
};
