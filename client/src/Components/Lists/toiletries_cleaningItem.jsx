import React from "react";
import { Link } from "react-router-dom";

const toiletries_cleaningItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.toiletriescleaning.name}</td>
        <td className="#">{props.toiletriescleaning.quantity}</td>
        <td className="#">{props.toiletriescleaning.user}</td>
        <Link to={"/ff/edit/"+props.toiletriescleaning._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default toiletries_cleaningItem;
