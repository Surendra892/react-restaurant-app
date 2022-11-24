import { legacy_createStore, applyMiddleware } from "redux";
import reducer from "./Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
