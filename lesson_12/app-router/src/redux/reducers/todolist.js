import { ACTIONS } from "./constants";

const defaultState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

export const todolistReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      const newTodos = [...state.todos, action.el];

      return { ...state, todos: newTodos };
    }

    case ACTIONS.SET_CHECKED: {
      const newTodos = state.todos.map((el) =>
        action.id === el.id ? { ...el, checked: !el.checked } : el
      );
      return { ...state, todos: newTodos };
    }
    case ACTIONS.SET_SELECTED: {
      const newTodos = state.todos.map((el) =>
        action.id === el.id ? { ...el, selected: !el.selected } : el
      );
      return { ...state, todos: newTodos };
    }
    case ACTIONS.REMOVE_TODO: {
      const newTodos = state.todos.filter((el) => action.id !== el.id && el);
      return { ...state, todos: newTodos };
    }

    default:
      return defaultState;
  }
};
