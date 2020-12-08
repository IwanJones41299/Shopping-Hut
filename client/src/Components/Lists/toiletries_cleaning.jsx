import React, { useState, useContext, useEffect } from "react";
import Item from "./toiletries_cleaningItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";
import DashNav from '../dashNav';

const ToiletriesCleaningItems = (props) => {
  const [toiletriescleaning, settoiletriescleaning] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [toiletriescleaningItems, settoiletriescleaningItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getHouseHold().then((data) => {
        settoiletriescleaningItems(data.toiletriescleaningItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postHouseHold(toiletriescleaning).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getHouseHold().then((getData) => {
            settoiletriescleaningItems(getData.toiletriescleaningItems);
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
    settoiletriescleaning({
      ...toiletriescleaning,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    settoiletriescleaning({
      name: "",
      quantity: "",
      user: "",
    });
  };

  return (
    <div>
      <h3 className="text-center" style={{color: "white"}}>Toiletries & Household</h3>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={toiletriescleaning.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="text"
            name="quantity"
            value={toiletriescleaning.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={toiletriescleaning.user}
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
            {toiletriescleaningItems && toiletriescleaningItems.map((toiletriescleaning) => {
              return <Item key={toiletriescleaning._id} toiletriescleaning={toiletriescleaning} />;
            })}
        </tbody>
      </table>
      <DashNav />
    </div>
  );
};

export default ToiletriesCleaningItems;
