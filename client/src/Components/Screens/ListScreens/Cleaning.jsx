import React, { useState, useContext, useEffect } from "react";
import Item from "./CleaningItem";
import ListService from "../../../Services/ListService";
import { AuthContext } from "../../../Context/AuthContext";
import Message from "../../Message";
import { Container, Table } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../../MobileCore/BottomNav";
import BrowserBottomNav from "../../BrowserCore/BottomNav";

const CleaningScreen = (props) => {
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

  if (isMobile || isTablet) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cleaning List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Cleaning</h2>
        <Container fluid>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={toiletriescleaning.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={toiletriescleaning.quantity}
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
              {toiletriescleaningItems &&
                toiletriescleaningItems.map((toiletriescleaning) => {
                  return (
                    <Item
                      key={toiletriescleaning._id}
                      toiletriescleaning={toiletriescleaning}
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
          <title>Cleaning List Page</title>
        </Helmet>
        <h2 className="text-center mt-5 category_title">Cleaning</h2>
        <Container fluid style={{ maxWidth: "30%" }}>
          <form onSubmit={onSubmit}>
            <input
              aria-label="product name"
              type="text"
              name="name"
              value={toiletriescleaning.name}
              onChange={onChange}
              className="form-control product_input"
              placeholder="Please enter an item"
              required
            />
            <input
              aria-label="product quantity"
              type="number"
              name="quantity"
              value={toiletriescleaning.quantity}
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
              {toiletriescleaningItems &&
                toiletriescleaningItems.map((toiletriescleaning) => {
                  return (
                    <Item
                      key={toiletriescleaning._id}
                      toiletriescleaning={toiletriescleaning}
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

export default CleaningScreen;
