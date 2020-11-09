import React from "react";
import { Link } from "react-router-dom";

const fresh_foodItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.freshfood.name}</td>
        <td className="#">{props.freshfood.quantity}</td>
        <td className="#">{props.freshfood.user}</td>
        <Link to={"/ff/edit/"+props.freshfood._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default fresh_foodItem;
