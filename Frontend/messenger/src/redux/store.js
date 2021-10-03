import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Message } from "./messages/reducer";

const store = createStore(
  combineReducers({ message: Message }),
  applyMiddleware(thunk)
);

export default store;
