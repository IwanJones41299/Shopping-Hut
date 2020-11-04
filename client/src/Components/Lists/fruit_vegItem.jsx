import React from "react";
import { Link } from "react-router-dom";

const fruit_vegItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.fruitveg.name}</td>
        <td className="#">{props.fruitveg.quantity}</td>
        <td className="#">{props.fruitveg.user}</td>
        <Link to={"/fruit_veg/edit/"+props.fruitveg._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default fruit_vegItem;
