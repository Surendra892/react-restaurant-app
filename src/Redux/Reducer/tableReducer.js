import { SET_TABLE_NUMBER, RESET_TABLE_NUMBER } from "../ActionType";

const initialState = {
  table_number: null,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_NUMBER:
      return {
        ...state,
        table_number: action.payload,
      };
    case RESET_TABLE_NUMBER:
      return {
        ...state,
        table_number: action.payload,
      };
    default:
      return state;
  }
};

export default tableReducer;
