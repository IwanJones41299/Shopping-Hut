import React, { useState, useContext, useEffect } from "react";
import Item from "./drinks_confectionaryItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";
import DashNav from '../dashNav';

const DrinksConfectionaryItems = (props) => {
  const [drinksconfectionary, setdrinksconfectionary] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [drinksconfectionaryItems, setdrinksconfectionaryItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getDrinksConfectionary().then((data) => {
        setdrinksconfectionaryItems(data.drinksconfectionaryItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postDrinksConfectionary(drinksconfectionary).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getDrinksConfectionary().then((getData) => {
            setdrinksconfectionaryItems(getData.drinksconfectionaryItems);
        });
      }
      //JWT token expired if this else if runs
      else if (message.msgBody === "Unauthorized") {
        setMessage(message);
        authcontext.setUser({
          name: "",
          username: " ",
          email: "",
        });
        authcontext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setdrinksconfectionary({
      ...drinksconfectionary,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setdrinksconfectionary({
      name: "",
      quantity: "",
      user: "",
    });
  };

  return (
    <div>
      <h3 className="text-center" style={{color: "white"}}>Drinks & Confectionary</h3>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={drinksconfectionary.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="text"
            name="quantity"
            value={drinksconfectionary.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={drinksconfectionary.user}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Who has added this product..."
            required
          />
          <button className="btn btn-primary btn-block btn-add" type="submit">
            Add
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
      <table class="table table-borderless">
        <thead class="thead-primary">
          <tr>
            <th scope="col"> Product </th> <th scope="col"> Quantity </th>{" "}
            <th scope="col"> User </th> <th scope="col"> Edit </th>{" "}
          </tr>
        </thead>
        <tbody>
            {drinksconfectionaryItems && drinksconfectionaryItems.map((drinksconfectionary) => {
              return <Item key={drinksconfectionary._id} drinksconfectionary={drinksconfectionary} />;
            })}
        </tbody>
      </table>
      <DashNav />
    </div>
  );
};

export default DrinksConfectionaryItems;
