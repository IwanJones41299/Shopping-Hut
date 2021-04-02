import React, { useState, useContext, useEffect } from "react";
import Item from "./DriedGoodsItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const DriedGoodsScreen = (props) => {
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

  if (isMobile) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dried Goods List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Dried Goods List Page</h2>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={driedfood.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={driedfood.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
              required
            />
            <button
              className="btn btn-primary btn-block login-btn"
              type="submit"
              aria-label="submit button"
            >
              Add
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </Container>
        <Container fluid className="table_container">
          <Table responsive="md" className="table-borderless" role="presentation">
            <thead>
              <tr>
                <th style={{ color: "#EFC9AF" }}>Completed</th>
                <th style={{ color: "#EFC9AF" }}>Product</th>
                <th style={{ color: "#EFC9AF" }}>Quantity</th>
                <th style={{ color: "#EFC9AF" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {driedfoodItems &&
                driedfoodItems.map((driedfood) => {
                  return <Item key={driedfood._id} driedfood={driedfood} />;
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
          <title>Dried Goods List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Dried Goods</h2>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={driedfood.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={driedfood.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
              required
            />
            <button
              className="btn btn-primary btn-block login-btn"
              type="submit"
              aria-label="submit button"
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
          <Table responsive="md" className="table-borderless" role="presentation">
            <thead>
              <tr>
                <th style={{ color: "#EFC9AF" }}>Completed</th>
                <th style={{ color: "#EFC9AF" }}>Product</th>
                <th style={{ color: "#EFC9AF" }}>Quantity</th>
                <th style={{ color: "#EFC9AF" }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {driedfoodItems &&
                driedfoodItems.map((driedfood) => {
                  return <Item key={driedfood._id} driedfood={driedfood} />;
                })}
            </tbody>
          </Table>
        </Container>
        <BrowserBottomNav />
      </>
    );
  }
};

export default DriedGoodsScreen;
