import { SET_TABLE_NUMBER, RESET_TABLE_NUMBER } from "../ActionType";

const SetTblAction = (value) => async (dispatch) => {
  dispatch({ type: SET_TABLE_NUMBER, payload: value });
};

const ResetTblAction = () => {
  return {
    type: RESET_TABLE_NUMBER,
    payload: null,
  };
};

export { SetTblAction, ResetTblAction };
