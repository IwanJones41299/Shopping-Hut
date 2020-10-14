import React, { useState, useContext, useEffect } from "react";
import ListItem from "./FV_listItem";
import ListService from "../../Services/ListService";
import { AuthContext } from "../../Context/AuthContext";

const FruitVegList = (props) => {
  const [list, setList] = useState({ name: "" });
  const [FruitVegList, setFruitVegList] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    ListService.getFruitVegList().then((data) => {
      setFruitVegList(data.FruitVegList);
    });
  }, []);

  return (
    <div>
      <ul className="list-group">
        {FruitVegList.map((list) => {
          return <ListItem key={list_id} FruitVegList={list} />;
        })}
      </ul>
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="list">Enter product</label>
        <input
          type="text"
          name="list"
          value={list.name}
          onChange={onChange}
          placeholder="enter a product..."
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {message ? <Message message={message}/> : null};
    </div>
  );
};

export default FruitVegList;
