import { ACTIONS, ACTIONS_POSTS } from "./constants";

const defaultState = {
  posts: [],
  loading: false,
  error: false,
  isModal: false,
  autor: {},
  autorInfo: {},
};

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
      return { ...state, posts: action.posts, loading: true, error: false };
    }
    case ACTIONS_POSTS.GET_POSTS_FAILURE: {
      return { ...state };
    }
    case ACTIONS_POSTS.OPEN_MODAL: {
      state.isModal = true;
      let autor = state.posts.find(
        (user) => user.user.name === action.event.target.innerText
      ).user;

      return { ...state, autor: autor };
    }
    case ACTIONS_POSTS.CLOSE_MODAL: {
      state.isModal = false;
      return { ...state };
    }
    case ACTIONS_POSTS.SHOW_MORE: {
      let count = 5;
      state.posts = state.posts.map((el, i) => {
        if (el.class === "hide" && count > 0) {
          el.class = "show";
          count--;
        }
        return el;
      });
      return { ...state };
    }
    case ACTIONS_POSTS.GET_AUTOR_REQUEST: {
      return { ...state };
    }
    case ACTIONS_POSTS.GET_AUTOR_SUCCES: {
      return { ...state, autorInfo: action.responseAutor };
    }
    default:
      return defaultState;
  }
};
