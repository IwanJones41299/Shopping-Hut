import React from "react";
import axios from "axios";

const PetsItem = (props) => {
  const deleteItem = (id) => {
    axios
      .get("/user/deletePet/" + props.pet._id)
      .then((res) => {
        console.log("item deleted");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <tr className="product_results">
        <td className="itemFont completed">
          <input className="form-check-input" type="checkbox" onClick={deleteItem} />
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.pet.name}
        </td>
        <td className="itemFont" style={{ color: "#EFC9AF" }}>
          {props.pet.quantity}
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

export default PetsItem;
