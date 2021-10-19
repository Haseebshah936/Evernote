import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import NoteReducer from "./Reducer/NoteReducer";

const Store = createStore(
  combineReducers({
    reducer: NoteReducer,
  }),
  applyMiddleware(thunk)
);

export default Store;
