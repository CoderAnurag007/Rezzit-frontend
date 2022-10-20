import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import PostReducer from "./postReducer";

export const reducers = combineReducers({
  AuthReducer,
  PostReducer,
});
