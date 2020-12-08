import React from "react";
import axios from 'axios';

const frozen_foodItems = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deleteFrozenFood/'+ props.frozenfood._id)
    .then((res) => {
      console.log('Item Deleted');
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <>
      <tr className="product_results">
        <td className="#">{props.frozenfood.name}</td>
        <td className="#">{props.frozenfood.quantity}</td>
        <td className="#">{props.frozenfood.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default frozen_foodItems;
