import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { orderReducer } from "./orderReducer";
import tableReducer from "./tableReducer";

const reducer = combineReducers({
  tableReducer: tableReducer,
  filterReducer: filterReducer,
  orderReducer: orderReducer,
});

export default reducer;
