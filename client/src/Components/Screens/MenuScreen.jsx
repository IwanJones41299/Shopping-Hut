import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import MobileBottomNav from "../MobileCore/BottomNav";
import BrowserBottomNav from "../BrowserCore/BottomNav";
import { Container, ListGroup } from "react-bootstrap";
const MenuScreen = (props) => {
  if (isMobile) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Menu</title>
        </Helmet>
        <MobileBottomNav />
        <Container fluid className="m-auto">
          <h1 className="category_title">List Menu</h1>
          <ListGroup>
            <Link to="/fruit_veg">
              <ListGroup.Item action>Fruit & Veg</ListGroup.Item>
            </Link>
            <Link to="/fresh_food">
              <ListGroup.Item action>Fresh Food</ListGroup.Item>
            </Link>
            <Link to="/frozen_food">
              <ListGroup.Item action>Frozen Food</ListGroup.Item>
            </Link>
            <Link to="/bakery">
              <ListGroup.Item action>Bakery</ListGroup.Item>
            </Link>
            <Link to="/dried_goods">
              <ListGroup.Item action>Dried Goods</ListGroup.Item>
            </Link>
            <Link to="/drinks_confectonary">
              <ListGroup.Item action>Drinks & Confectionary</ListGroup.Item>
            </Link>
            <Link to="/cleaning">
              <ListGroup.Item action>Cleaning</ListGroup.Item>
            </Link>
            <Link to="/pets">
              <ListGroup.Item action>Pets</ListGroup.Item>
            </Link>
          </ListGroup>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Menu</title>
        </Helmet>
        <BrowserBottomNav />
        <Container fluid className="m-auto" style={{ maxWidth: "30%" }}>
          <h1 className="category_title">List Menu</h1>
          <ListGroup>
            <Link to="/fruit_veg">
              <ListGroup.Item action className="browser-menu">
                Fruit & Veg
              </ListGroup.Item>
            </Link>
            <Link to="/fresh_food">
              <ListGroup.Item action className="browser-menu">
                Fresh Food
              </ListGroup.Item>
            </Link>
            <Link to="/frozen_food">
              <ListGroup.Item action className="browser-menu">
                Frozen Food
              </ListGroup.Item>
            </Link>
            <Link to="/bakery">
              <ListGroup.Item action className="browser-menu">
                Bakery
              </ListGroup.Item>
            </Link>
            <Link to="/dried_goods">
              <ListGroup.Item action className="browser-menu">
                Dried Goods
              </ListGroup.Item>
            </Link>
            <Link to="/drinks_confectonary">
              <ListGroup.Item action className="browser-menu">
                Drinks & Confectionary
              </ListGroup.Item>
            </Link>
            <Link to="/cleaning">
              <ListGroup.Item action className="browser-menu">
                Cleaning
              </ListGroup.Item>
            </Link>
            <Link to="/pets">
              <ListGroup.Item action className="browser-menu">
                Pets
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Container>
      </>
    );
  }
};

export default MenuScreen;
