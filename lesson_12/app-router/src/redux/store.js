import { createStore } from "redux";

import { todolistReducer } from "./reducers/todolist";

export const storeHead = createStore(
  todolistReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
