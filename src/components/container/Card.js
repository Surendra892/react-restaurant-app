import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { orderAction } from "../../Redux/ActionCreater/orderAction";
import { ResetTblAction } from "../../Redux/ActionCreater/TableAction";

const Card = ({ filter_name, table_number, orderAction, ResetTblAction }) => {
  const [data, setData] = useState([]);
  const [cloneData, setCloneData] = useState([]);

  useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((res) => res.json())
      .then((jsondata) => {
        setData(jsondata.items);
        setCloneData(jsondata.items);
      });
  }, []);

  useEffect(() => {
    if (filter_name != "All Items") {
      let specificData = cloneData.filter(
        (items) => items.category == filter_name
      );
      setData(specificData);
    } else {
      setData(cloneData);
    }
  }, [filter_name]);

  const OrderClick = async (id, name, prize, url) => {
    if (table_number != null) {
      id = id + Math.random();
      await orderAction(id, name, prize, url, table_number);
      await ResetTblAction();
      alert("Order Placed Successfully");
    } else {
      alert("Please Select table");
    }
  };
  return (
    <center>
      {data.length > 0 ? (
        <div className="container">
          <div className="row" style={{ padding: "5px" }}>
            {data.map((item) => (
              <div className="col-md-5 col-lg-4 col-xl-3  mb-2">
                <div
                  className="card"
                  style={{ width: "18rem", padding: "2px" }}
                  key={item.id}
                >
                  <img src={item.url} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-text">Rs.{item.prize}</div>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        OrderClick(item.id, item.name, item.prize, item.url);
                      }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="spinner-border text-primary mt-5"></div>
      )}
    </center>
  );
};

const mapStateToProps = (state) => ({
  filter_name: state.filterReducer.filter_name,
  table_number: state.tableReducer.table_number,
});

export default connect(mapStateToProps, { ResetTblAction, orderAction })(Card);
