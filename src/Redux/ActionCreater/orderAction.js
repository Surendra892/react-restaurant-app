import { PLACE_ORDER, REMOVE_ORDER } from "../ActionType";

export const orderAction =
  (id, name, prize, url, table_number) => async (dispatch) => {
    dispatch({
      type: PLACE_ORDER,
      payload: {
        id: id,
        name: name,
        prize: prize,
        url: url,
        table_number: table_number,
      },
    });
  };

export const removeOrderAction = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_ORDER,
    payload: id,
  });
};
