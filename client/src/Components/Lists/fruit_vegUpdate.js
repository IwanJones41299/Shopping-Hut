import React, { useState, useContext, useEffect } from "react";
import ListEdit from "./listEdit";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";
import Message from "../message";

const ItemEdit = (props) => {
  const [list, setList] = useState({ name: "", quantity: Number, user: "" });
  const [lists, setLists] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getItems().then((data) => {
      setLists(data.lists);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.sendItemUpdate(list).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getItems().then((getData) => {
          setLists(getData.lists);
        });
      }
      //JWT token expired if this else if runs
      else if (message.msgBody === "Unauthorized") {
        setMessage(message);
        authcontext.setUser({ name: "", username: " ", email: "" });
        authcontext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setList({ name: "", quantity: "", user: "" });
  };

  return (
    <div>
      <div className="container-fluid">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={list.name}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Edit item name..."
          />
          <input
            type="text"
            name="quantity"
            value={list.quantity}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Edit item quantity..."
          />
          <input
            type="text"
            name="user"
            value={list.user}
            onChange={onChange}
            className="form-control product_input"
            placeholder="Edit user..."
          />
          <button className="btn btn-primary btn-block btn-add" type="submit">
            Edit
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
      <table class="table table-borderless">
        <thead class="thead-primary">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">User</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => {
            return <ListEdit key={list._id} list={list} />;
          })}
        </tbody>
      </table>
      ;
    </div>
  );
};

export default ItemEdit;
