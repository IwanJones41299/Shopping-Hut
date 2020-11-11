import React, { useState, useContext, useEffect } from "react";
import Item from "./petsItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";

const PetItems = (props) => {
  const [pet, setpet] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [petItems, setpetItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getPets().then((data) => {
        setpetItems(data.petItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postPets(pet).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getPets().then((getData) => {
            setpetItems(getData.petItems);
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
    setpet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setpet({
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
            value={pet.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter an item"
            required
          />
          <input
            type="text"
            name="quantity"
            value={pet.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Please enter the amount you want..."
            required
          />
          <input
            type="text"
            name="user"
            value={pet.user}
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
            {petItems && petItems.map((pet) => {
              return <Item key={pet._id} pet={pet} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PetItems;
