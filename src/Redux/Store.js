import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//----------------- LOCAL---STORAGE-------------
/* const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStr = localStorage.getItem("state");
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
const persistedStore = loadFromLocalStorage(); */
//----------------- LOCAL---STORAGE-------------

//----------------- Session---Storage-------------
const saveToSessionStorage = (state) => {
  sessionStorage.setItem("state", JSON.stringify(state));
};

const LoadFromSessionStorage = () => {
  const StateStr = sessionStorage.getItem("state");
  return StateStr ? JSON.parse(StateStr) : undefined;
};

const persistedStore = LoadFromSessionStorage();
//----------------- Session---Storage-------------

const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(() => {
  saveToSessionStorage(store.getState());
});

export default store;
