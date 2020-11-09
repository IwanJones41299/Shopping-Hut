import React from "react";
import { Link } from "react-router-dom";

const frozen_foodItems = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.frozenfood.name}</td>
        <td className="#">{props.frozenfood.quantity}</td>
        <td className="#">{props.frozenfood.user}</td>
        <Link to={"/ff/edit/"+props.frozenfood._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default frozen_foodItems;
