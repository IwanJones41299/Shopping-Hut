import React, { useState, useContext, useEffect } from "react";
import Item from "./FrozenFoodItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const FrozenFoodScreen = (props) => {
  const [frozenfood, setfrozenfood] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [frozenfoodItems, setfrozenfoodItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getFrozenFood().then((data) => {
      setfrozenfoodItems(data.frozenfoodItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postFrozenFood(frozenfood).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getFrozenFood().then((getData) => {
          setfrozenfoodItems(getData.frozenfoodItems);
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
    setfrozenfood({
      ...frozenfood,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setfrozenfood({
      name: "",
      quantity: "",
      user: "",
    });
  };

  if (isMobile) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Frozen Food</title>
        </Helmet>
        <h3 className="text-center mt-5 category_title">Frozen Food</h3>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={frozenfood.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              type="number"
              name="quantity"
              value={frozenfood.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
              required
            />
            <input
              type="text"
              name="user"
              value={frozenfood.user}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Who has added this product..."
              required
            />
            <button
              className="btn btn-primary btn-block login-btn"
              type="submit"
            >
              Add
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </Container>
        <Container fluid className="table_container">
          <Table responsive="md" className="table-borderless">
            <thead>
              <tr>
                <th style={{ color: "#EFC9AF" }}>Completed</th>
                <th style={{ color: "#EFC9AF" }}>Product</th>
                <th style={{ color: "#EFC9AF" }}>Quantity</th>
                <th style={{ color: "#EFC9AF" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {frozenfoodItems &&
                frozenfoodItems.map((frozenfood) => {
                  return <Item key={frozenfood._id} frozenfood={frozenfood} />;
                })}
            </tbody>
          </Table>
        </Container>
        <MobileBottomNav />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Frozen Food</title>
        </Helmet>
        <h3 className="text-center mt-5 category_title">Frozen Food</h3>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={frozenfood.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              type="number"
              name="quantity"
              value={frozenfood.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
              required
            />
            <input
              type="text"
              name="user"
              value={frozenfood.user}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Who has added this product..."
              required
            />
            <button
              className="btn btn-primary btn-block login-btn"
              type="submit"
            >
              Add
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </Container>
        <Container
          fluid
          className="table_container"
          style={{ maxWidth: "30%" }}
        >
          <Table responsive="md" className="table-borderless">
            <thead>
              <tr>
                <th style={{ color: "#EFC9AF" }}>Completed</th>
                <th style={{ color: "#EFC9AF" }}>Product</th>
                <th style={{ color: "#EFC9AF" }}>Quantity</th>
                <th style={{ color: "#EFC9AF" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {frozenfoodItems &&
                frozenfoodItems.map((frozenfood) => {
                  return <Item key={frozenfood._id} frozenfood={frozenfood} />;
                })}
            </tbody>
          </Table>
        </Container>
        <BrowserBottomNav />
      </>
    );
  }
};

export default FrozenFoodScreen;
