import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ order_list, pageName }) => {
  return (
    <center>
      <nav className="navbar navbar-light m-3 mt-1 bg-light border border-2 pe-2 ps-2">
        <a className="navbar-brand h2">Restaurant</a>
        <span className="h5 text-danger">{pageName}</span>
        <button className="btn btn-primary">
          <Link to="/orders" style={{ color: "white", textDecoration: "none" }}>
            Orders
          </Link>
          <span className="badge bg-light text-danger ms-1">{order_list}</span>
        </button>
      </nav>
    </center>
  );
};
const mapStateToProps = (state) => ({
  order_list: state.orderReducer.length,
});
export default connect(mapStateToProps)(Header);
