import React from "react";
import axios from "axios";

const FruitVegItem = (props) => {
  const deleteItem = (id) => {
    axios
      .get("/user/deleteFruitVeg/" + props.fruitveg._id)
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
          {props.fruitveg.name}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.fruitveg.quantity}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.fruitveg.user}
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

export default FruitVegItem;
