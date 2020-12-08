import React from "react";
import axios from 'axios';

const fruit_vegItem = (props) => {
  
  const deleteItem = (id) => {
    axios.get('/user/deleteFruitVeg/'+ props.fruitveg._id)
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
        <td className="itemFont">{props.fruitveg.name}</td>
        <td className="itemFont">{props.fruitveg.quantity}</td>
        <td className="itemFont">{props.fruitveg.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default fruit_vegItem;
