import React from "react";
import { Link } from "react-router-dom";

const dried_foodItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.driedfood.name}</td>
        <td className="#">{props.driedfood.quantity}</td>
        <td className="#">{props.driedfood.user}</td>
        <Link to={"/ff/edit/"+props.driedfood._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default dried_foodItem;
