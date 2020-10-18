import React, { useState, useContext, useEffect } from 'react';
import ListItem from './listItem';
import ListService from '../../Services/ListService';
import { AuthContext } from '../../Context/AuthContext';
import Message from '../message';

const Items = (props) => {
  const [list, setList] = useState({ name: "" });
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
    ListService.postItem(list).then((data) => {
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

  const onChange = e => {
      setList({name : e.target.value});
  }

  const resetForm = () => {
      setList({name : ""});
  }

  return (
    <div>
      <ul className="list-group">
        {
            lists.map(list => {
                return <ListItem key={list._id} list={list}/>
            })
        }
      </ul>
      <br />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="list"
          value={list.name}
          onChange={onChange}
          className="form-control"
          placeholder="Please enter an item"
        />
        <button className="btn btn-primary btn-block" type="submit">
          Add
        </button>
      </form>
      {message ? <Message message={message} /> : null}
    </div>
  );
};

export default Items;
