import React from "react";
import axios from 'axios';

const toiletries_cleaningItem = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deletetoiletriescleaning/'+ props.toiletriescleaning._id)
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
        <td className="itemFont">{props.toiletriescleaning.name}</td>
        <td className="itemFont">{props.toiletriescleaning.quantity}</td>
        <td className="itemFont">{props.toiletriescleaning.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default toiletries_cleaningItem;
