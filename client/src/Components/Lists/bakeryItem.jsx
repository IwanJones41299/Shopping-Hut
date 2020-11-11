import React from "react";
import { Link } from "react-router-dom";

const bakery_Items = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.bakery.name}</td>
        <td className="#">{props.bakery.quantity}</td>
        <td className="#">{props.bakery.user}</td>
        <Link to={"/bakery/edit"+props.bakery._id}>
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default bakery_Items;
