import React from "react";
import axios from 'axios';

const fresh_foodItem = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deleteFreshFood/'+ props.freshfood._id)
    .then((res) => {
      console.log('item deleted');
      window.location.reload();
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <>
      <tr className="product_results">
        <td className="itemFont">{props.freshfood.name}</td>
        <td className="itemFont">{props.freshfood.quantity}</td>
        <td className="itemFont">{props.freshfood.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default fresh_foodItem;
