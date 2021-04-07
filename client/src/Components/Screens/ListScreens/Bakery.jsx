import React, { useState, useContext, useEffect } from "react";
import Item from "./BakeryItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const BakeryScreen = (props) => {
  const [bakery, setbakery] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [bakeryItems, setbakeryItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getBakery().then((data) => {
      setbakeryItems(data.bakeryItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postBakery(bakery).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getBakery().then((getData) => {
          setbakeryItems(getData.bakeryItems);
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
    setbakery({
      ...bakery,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setbakery({
      name: "",
      quantity: "",
      user: "",
    });
  };

  if (isMobile || isTablet) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Bakery List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Bakery</h2>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={bakery.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={bakery.quantity}
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
              {bakeryItems &&
                bakeryItems.map((bakery) => {
                  return <Item key={bakery._id} bakery={bakery} />;
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
          <title>Bakery List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Bakery</h2>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={bakery.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={bakery.quantity}
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
              {bakeryItems &&
                bakeryItems.map((bakery) => {
                  return <Item key={bakery._id} bakery={bakery} />;
                })}
            </tbody>
          </Table>
        </Container>
        <BrowserBottomNav />
      </>
    );
  }
};

export default BakeryScreen;
