import { PLACE_ORDER, REMOVE_ORDER } from "../ActionType";

const initialState = [];
export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLACE_ORDER:
      return [...state, payload];
    case REMOVE_ORDER:
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};
