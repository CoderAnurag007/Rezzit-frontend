import {
  legacy_createStore,
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../Reducers/index";

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (error) {
    console.log(error);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem("store");
    if (serializedStore === null) {
      return undefined;
    }
    return JSON.parse(serializedStore);
  } catch (error) {
    console.log(error);
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedStore = loadFromLocalStorage();
const store = createStore(
  reducers,
  persistedStore,
  composeEnhancer(applyMiddleware(thunk))
);

//  local store code

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;