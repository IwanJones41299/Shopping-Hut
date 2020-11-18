import React from "react";
import axios from 'axios';

const FruitVegUpdate = (props) => {  

  return (
    <div>
      <h1>Fruit&veg Update</h1>
      <tr className="product_results">
        <td className="#">{props.fruitveg._id.name}</td>
        <td className="#">{props.fruitveg._id.quantity}</td>
        <td className="#">{props.fruitveg._id.user}</td>
          <td className="btn btn-sm btn-primary crud-btn">Delete</td>
      </tr>
    </div>
  );
};

export default FruitVegUpdate;
