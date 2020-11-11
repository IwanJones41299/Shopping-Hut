import React, { useState, useContext, useEffect } from "react";
import Item from "./dried_foodItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";

const DriedFoodItems = (props) => {
  const [driedfood, setdriedfood] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [driedfoodItems, setdriedfoodItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getDriedFood().then((data) => {
        setdriedfoodItems(data.driedfoodItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postDriedFood(driedfood).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getDriedFood().then((getData) => {
            setdriedfoodItems(getData.driedfoodItems);
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
    setdriedfood({
      ...driedfood,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setdriedfood({
      name: "",
      quantity: "",
      user: "",
    });
  };

  return (
    <div>
      <h3 className="text-center" style={{color: "white"}}>Fresh Food</h3>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={driedfood.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="text"
            name="quantity"
            value={driedfood.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={driedfood.user}
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
            {driedfoodItems && driedfoodItems.map((driedfood) => {
              return <Item key={driedfood._id} driedfood={driedfood} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DriedFoodItems;
