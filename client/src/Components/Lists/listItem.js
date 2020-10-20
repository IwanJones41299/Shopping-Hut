import React from "react";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.list.name}</td>
        <td className="#">{props.list.quantity}</td>
        <td className="#">{props.list.user}</td>
        <Link to="/update/:id">
          <td className="btn btn-sm btn-primary crud-btn">Edit/Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default ListItem;
