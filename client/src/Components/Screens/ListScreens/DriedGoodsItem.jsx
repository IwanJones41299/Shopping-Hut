import React from "react";
import axios from "axios";

const DriedGoodsItem = (props) => {
  const deleteItem = (id) => {
    axios
      .get("/user/deleteDriedFoods/" + props.driedfood._id)
      .then((res) => {
        console.log("item deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <tr className="product_results">
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.driedfood.name}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.driedfood.quantity}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.driedfood.user}
        </td>
        <button
          className="btn btn-sm btn-primary login-btn mt-2"
          onClick={deleteItem}
        >
          Delete
        </button>
      </tr>
    </>
  );
};

export default DriedGoodsItem;
