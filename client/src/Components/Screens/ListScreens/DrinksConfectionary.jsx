import React, { useState, useContext, useEffect } from "react";
import Item from "./DrinksConfectionaryItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const DrinksConfectionaryScreen = (props) => {
  const [drinksconfectionary, setdrinksconfectionary] = useState({
    name: "",
    quantity: Number,
    user: "",
  });
  const [drinksconfectionaryItems, setdrinksconfectionaryItems] = useState([]);
  const [message, setMessage] = useState(null);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    ListService.getDrinksConfectionary().then((data) => {
      setdrinksconfectionaryItems(data.drinksconfectionaryItems);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    ListService.postDrinksConfectionary(drinksconfectionary).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        ListService.getDrinksConfectionary().then((getData) => {
          setdrinksconfectionaryItems(getData.drinksconfectionaryItems);
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
    setdrinksconfectionary({
      ...drinksconfectionary,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setdrinksconfectionary({
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
          <title>Drinks & Confectionary</title>
        </Helmet>
        <h3 className="text-center mt-5 category_title">
          Drinks & Confectionary
        </h3>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={drinksconfectionary.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={drinksconfectionary.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
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
              {drinksconfectionaryItems &&
                drinksconfectionaryItems.map((drinksconfectionary) => {
                  return (
                    <Item
                      key={drinksconfectionary._id}
                      drinksconfectionary={drinksconfectionary}
                    />
                  );
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
          <title>Drinks & Confectionary</title>
        </Helmet>
        <h3 className="text-center mt-5 category_title">
          Drinks & Confectionary
        </h3>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={drinksconfectionary.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={drinksconfectionary.quantity}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter the amount you want..."
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
              {drinksconfectionaryItems &&
                drinksconfectionaryItems.map((drinksconfectionary) => {
                  return (
                    <Item
                      key={drinksconfectionary._id}
                      drinksconfectionary={drinksconfectionary}
                    />
                  );
                })}
            </tbody>
          </Table>
        </Container>
        <BrowserBottomNav />
      </>
    );
  }
};

export default DrinksConfectionaryScreen;
