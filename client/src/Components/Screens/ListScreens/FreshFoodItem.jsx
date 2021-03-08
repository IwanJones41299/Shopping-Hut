import React from "react";
import axios from 'axios';

const FreshFoodScreen = (props) => {

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
        <td className="itemFont completed">
          <input className="form-check-input" type="checkbox" onClick={deleteItem} />
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.freshfood.name}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.freshfood.quantity}
        </td>
        <button
          className="btn btn-sm btn-primary login-btn mt-2"
          onClick={deleteItem}
        >
          Delete
        </button>
      </tr>
    </>
  );
};

export default FreshFoodScreen;