import React, { useState, useContext, useEffect } from "react";
import Item from "./FruitVegItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const FruitVegScreen = (props) => {
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

  const clearList = () => {

  };

  const resetForm = () => {
    setfruitveg({
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
          <title>Fruit & Veg List Page</title>
        </Helmet>
        <h3 className="text-center mt-5 category_title">Fruit & Veg</h3>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={fruitveg.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={fruitveg.quantity}
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
          <button
            onClick={clearList}
            className="btn btn-primary btn-block login-btn mt-2"
            aria-label="submit button"
          >
            Clear
          </button>
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
            <tbody className>
              {fruitvegItems &&
                fruitvegItems.map((fruitveg) => {
                  return <Item key={fruitveg._id} fruitveg={fruitveg} />;
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
          <title>Fruit & Veg</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Fruit & Veg</h2>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={fruitveg.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={fruitveg.quantity}
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
              {fruitvegItems &&
                fruitvegItems.map((fruitveg) => {
                  return <Item key={fruitveg._id} fruitveg={fruitveg} />;
                })}
            </tbody>
          </Table>
        </Container>
        <BrowserBottomNav />
      </>
    );
  }
};

export default FruitVegScreen;
