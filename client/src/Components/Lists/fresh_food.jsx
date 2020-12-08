import React, { useState, useContext, useEffect } from "react";
import Item from "./fresh_foodItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";
import DashNav from '../dashNav';

const FreshFoodItems = (props) => {
  const [freshfood, setfreshfood] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [freshfoodItems, setfreshfoodItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getFreshFood().then((data) => {
      setfreshfoodItems(data.freshfoodItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postFreshFood(freshfood).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getFreshFood().then((getData) => {
          setfreshfoodItems(getData.freshfoodItems);
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
    setfreshfood({
      ...freshfood,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setfreshfood({
      name: "",
      quantity: "",
      user: "",
    });
  };

  return (
    <div>
      <h3 className="text-center" style={{ color: "white" }}>
        Fresh Food
      </h3>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={freshfood.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="text"
            name="quantity"
            value={freshfood.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={freshfood.user}
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
      <table class="table table-borderless container-fluid">
        <thead class="thead-primary">
          <tr>
            <th scope="col"> Product </th> <th scope="col"> Quantity </th>{" "}
            <th scope="col"> User </th> <th scope="col"> Edit </th>{" "}
          </tr>
        </thead>
        <tbody>
          {freshfoodItems &&
            freshfoodItems.map((freshfood) => {
              return <Item key={freshfood._id} freshfood={freshfood} />;
            })}
        </tbody>
      </table>
      <DashNav />
    </div>
  );
};

export default FreshFoodItems;
