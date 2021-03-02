import React from "react";
import axios from "axios";

const CleaningItem = (props) => {
  const deleteItem = (id) => {
    axios
      .get("/user/deletetoiletriescleaning/" + props.toiletriescleaning._id)
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
          {props.toiletriescleaning.name}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.toiletriescleaning.quantity}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.toiletriescleaning.user}
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

export default CleaningItem;
