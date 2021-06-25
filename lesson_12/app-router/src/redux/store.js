import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { postsReducer } from "./reducers/posts";
import createSagaMiddleware from "redux-saga";

import { todolistReducer } from "./reducers/todolist";
import { postSaga } from "./sagas/postsSaga";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const storeHead = createStore(
  combineReducers({ todolistReducer, postsReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(postSaga);
