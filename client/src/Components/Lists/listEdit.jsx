import React from "react";
import { Link } from "react-router-dom";

const ListEdit = (props) => {
  return (
    <>
      <tr className="product_results">
        <td className="#">{props.list.name}</td>
        <td className="#">{props.list.quantity}</td>
        <td className="#">{props.list.user}</td>
        <Link to="/fruit_veg">
          <td className="btn btn-sm btn-danger">Delete</td>
        </Link>
      </tr>
    </>
  );
};

export default ListEdit;