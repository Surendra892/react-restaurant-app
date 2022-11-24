import React from "react";
import { connect } from "react-redux";
import Header from "./container/Header";
import { removeOrderAction } from "../Redux/ActionCreater/orderAction";

const Orders = ({ ordered_items, removeOrderAction }) => {
  var cart_prize = [];
  var total_amount;

  ordered_items.map((item) => cart_prize.push(item.prize));

  if (cart_prize.length > 0) {
    function sum(a, b) {
      return a + b;
    }
    total_amount = cart_prize.reduce(sum);
  } else {
    total_amount = 0;
  }
  const RemoveClick = (id, name) => {
    window.confirm(` Confirm to remove : ${name}`) && removeOrderAction(id);
  };

  return (
    <>
      <Header pageName="Orders Page" />
      {cart_prize.length > 0 && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          Total Amount : ₹{total_amount}/-
        </div>
      )}
      <center>
        {ordered_items.length > 0 ? (
          <div className="container">
            <div className="row" style={{ padding: "5px" }}>
              {ordered_items.map((item) => (
                <div className="col-md-4 col-sm-6 col-lg-3 mb-2">
                  <div
                    className="card"
                    style={{ width: "14rem", padding: "2px" }}
                    key={item.id}
                  >
                    <img src={item.url} className="card-img-top" />
                    <div className="card-body">
                      <h6 className="card-title">
                        <b>{item.name}</b>
                      </h6>
                      <div className="card-text h6">
                        Bill amount : ₹{item.prize}/-
                      </div>
                      <div className="card-text h6">
                        Table No : {item.table_number}
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger mb-2"
                        onClick={() => RemoveClick(item.id, item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h4 mt-5 pt-5">No Orders Placed</div>
        )}
      </center>
    </>
  );
};

const mapStateToProps = (state) => ({
  ordered_items: state.orderReducer,
});
export default connect(mapStateToProps, { removeOrderAction })(Orders);
