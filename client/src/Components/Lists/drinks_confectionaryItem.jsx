import React from "react";
import { Link } from "react-router-dom";

const drinks_confectionaryItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.drinksconfectionary.name}</td>
        <td className="#">{props.drinksconfectionary.quantity}</td>
        <td className="#">{props.drinksconfectionary.user}</td>
        <Link to={"/drinks_confectonary/edit/"+props.drinksconfectionary._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default drinks_confectionaryItem;
