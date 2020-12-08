import React from "react";
import axios from 'axios';

const bakery_Items = (props) => {

  const deleteItem = (id) => {
    axios.get('/user/deleteBakery/'+ props.bakery._id)
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
        <td className="#">{props.bakery.name}</td>
        <td className="#">{props.bakery.quantity}</td>
        <td className="#">{props.bakery.user}</td>
        <button className="btn btn-sm btn-primary crud-btn" onClick={deleteItem}>Delete</button>
      </tr>
    </>
  );
};

export default bakery_Items;
