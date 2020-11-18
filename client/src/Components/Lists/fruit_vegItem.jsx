import React from "react";
import axios from 'axios';

const fruit_vegItem = (props) => {
  
  const deleteItem = (id) => {
    axios.delete(`/user/fruitvegDelete/${id}`)
  };

  return (
    <>
      <tr className="product_results">
        <td className="#">{props.fruitveg.name}</td>
        <td className="#">{props.fruitveg.quantity}</td>
        <td className="#">{props.fruitveg.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default fruit_vegItem;
