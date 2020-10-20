import React, { useState, useContext, useEffect } from "react";
import ListItem from "./listItem";
import ListService from "../../Services/ListService";
/* import { AuthContext } from "../../Context/AuthContext"; */
/* import Message from "../message"; */

const update_Board = () => {

  
  /* const Edit = () {
            
    } */

  /* const Delete = () {
            
    } */
  return (
    <div className="container-fluid">
      <h1 className="Update_Title">Update Board</h1>
      <div className="container-fluid">
        <form /* onSubmit={onSubmit} */>
          <input
            type="text"
            name="name"
            /* value={list.name}
            onChange={onChange} */
            className="form-control product_input"
            placeholder="Update item"
          />
          <input
            type="text"
            name="quantity"
            /* value={list.quantity}
            onChange={onChange} */
            className="form-control product_input"
            placeholder="Update amount you want..."
          />
          <input
            type="text"
            name="user"
            /* value={list.user}
            onChange={onChange} */
            className="form-control product_input"
            placeholder="Who has added this product..."
          />
          <button className="btn btn-primary btn-block btn-add" type="submit" /* onClick={Delete} */>
            Edit
          </button>
          <button className="btn btn-primary btn-block btn-add" type="submit" /* onClick={Delete} */>
            Delete
          </button>
        </form>
        {/* {message ? <Message message={message} /> : null} */}
      </div>
    </div>
  );
};

export default update_Board;
