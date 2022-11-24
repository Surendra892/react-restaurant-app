import React from "react";
import { connect } from "react-redux";
import filterAction from "../../Redux/ActionCreater/filterAction";

const Filter = ({ filterAction }) => {
  const product = [
    "All Items",
    "Rice Items",
    "Cold Drinks",
    "Pizza",
    "Hot Drinks",
  ];

  const listitem = product.map((item, index) => (
    <option value={item} key={index}>
      {item}
    </option>
  ));
  return (
    <center>
      <span className="h4">Filter</span>
      <select
        name="filter"
        className="m-3 btn btn-outline btn-sm active"
        onChange={(e) => filterAction(e.target.value)}
      >
        {listitem}
      </select>
    </center>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterReducer.filter_name,
});

export default connect(mapStateToProps, { filterAction })(Filter);
