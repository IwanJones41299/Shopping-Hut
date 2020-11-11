import React from "react";
import { Link } from "react-router-dom";

const petItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.pet.name}</td>
        <td className="#">{props.pet.quantity}</td>
        <td className="#">{props.pet.user}</td>
        <Link to={"/ff/edit/"+props.pet._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default petItem;
