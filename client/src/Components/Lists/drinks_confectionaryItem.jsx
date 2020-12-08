import React from "react";
import axios from 'axios';

const drinks_confectionaryItem = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deleteDrinksConfectionary/'+ props.drinksconfectionary._id)
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
        <td className="#">{props.drinksconfectionary.name}</td>
        <td className="#">{props.drinksconfectionary.quantity}</td>
        <td className="#">{props.drinksconfectionary.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default drinks_confectionaryItem;
