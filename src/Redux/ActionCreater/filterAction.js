import { SET_FILTER_NAME } from "../ActionType";

const filterAction = (value) => async (dispatch) => {
  dispatch({
    type: SET_FILTER_NAME,
    payload: value,
  });
};

export default filterAction;
