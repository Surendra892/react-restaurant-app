import React from "react";
import { connect } from "react-redux";
import { SetTblAction } from "../../Redux/ActionCreater/TableAction";

const Table = (props) => {
  const tblnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const btnActive = "btn btn-outline-primary active";
  const btnInactive = "btn btn-outline-primary ";
  return (
    <div className="mt-5 mb-3">
      <div className="h2 mb-3">Select a table number :</div>
      {tblnum.map((number) => (
        <div style={{ display: "inline" }} className="ms-2">
          <button
            className={props.table_number === number ? btnActive : btnInactive}
            onClick={() => {
              props.SetTblAction(number);
            }}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    table_number: state.tableReducer.table_number,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    SetTblAction: () => {
      dispatch(SetTblAction());
    },
}; */

export default connect(
  mapStateToProps,
  /* mapDispatchToProps */ { SetTblAction }
)(Table);
