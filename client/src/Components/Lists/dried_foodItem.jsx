import React from "react";
import axios from 'axios';

const dried_foodItem = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deleteDriedFoods/'+ props.driedfood._id)
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
        <td className="#">{props.driedfood.name}</td>
        <td className="#">{props.driedfood.quantity}</td>
        <td className="#">{props.driedfood.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default dried_foodItem;