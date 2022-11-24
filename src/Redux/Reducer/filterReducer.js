import { SET_FILTER_NAME } from "../ActionType";

const initailState = {
  filter_name: "All Items",
};
const filterReducer = (state = initailState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER_NAME:
      return {
        ...state,
        filter_name: payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
