import React, { useState, useContext, useEffect } from "react";
import FruitVegItem from "./fruit_vegItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";
import DashNav from '../dashNav';

const FruitVegItems = (props) => {
  const [fruitveg, setfruitveg] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [fruitvegItems, setfruitvegItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getFruitVeg().then((data) => {
      setfruitvegItems(data.fruitvegItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postFruitVeg(fruitveg).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getFruitVeg().then((getData) => {
          setfruitvegItems(getData.fruitvegItems);
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
    setfruitveg({
      ...fruitveg,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setfruitveg({
      name: "",
      quantity: "",
      user: "",
    });
  };

  return (
    <div>
      <h3 className="text-center" style={{color: "white"}}>Fruit & Veg</h3>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={fruitveg.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="number"
            name="quantity"
            value={fruitveg.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={fruitveg.user}
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
            {fruitvegItems && fruitvegItems.map((fruitveg) => {
              return <FruitVegItem key={fruitveg._id} fruitveg={fruitveg} />;
            })}
        </tbody>
      </table>
      <DashNav />
    </div>
  );
};

export default FruitVegItems;
