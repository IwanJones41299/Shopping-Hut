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
          <title>List Menu Screen</title>
        </Helmet>
        <MobileBottomNav />
        <Container fluid className="m-auto">
          <h2 className="category_title">List Menu</h2>
          <ListGroup>
            <Link to="/fruit_veg" role="link" aria-label="fruit and veg list">
              <ListGroup.Item action>Fruit & Veg</ListGroup.Item>
            </Link>
            <Link to="/fresh_food" role="link" aria-label="fresh food list">
              <ListGroup.Item action>Fresh Food</ListGroup.Item>
            </Link>
            <Link to="/frozen_food" role="link" aria-label="frozen food list">
              <ListGroup.Item action>Frozen Food</ListGroup.Item>
            </Link>
            <Link to="/bakery" role="link" aria-label="bakery list">
              <ListGroup.Item action>Bakery</ListGroup.Item>
            </Link>
            <Link to="/dried_goods" role="link" aria-label="dried goods list">
              <ListGroup.Item action>Dried Goods</ListGroup.Item>
            </Link>
            <Link to="/drinks_confectonary" role="link" aria-label="drinks and confectionary list">
              <ListGroup.Item action>Drinks & Confectionary</ListGroup.Item>
            </Link>
            <Link to="/cleaning" role="link" aria-label="cleaning list">
              <ListGroup.Item action>Cleaning</ListGroup.Item>
            </Link>
            <Link to="/pets" role="link" aria-label="pets list">
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
          <title>List Menu Screen</title>
        </Helmet>
        <BrowserBottomNav />
        <Container fluid className="m-auto" style={{ maxWidth: "30%" }}>
          <h2 className="category_title">List Menu</h2>
          <ListGroup>
            <Link to="/fruit_veg" role="link" aria-label="fruit and veg list">
              <ListGroup.Item action>Fruit & Veg</ListGroup.Item>
            </Link>
            <Link to="/fresh_food" role="link" aria-label="fresh food list">
              <ListGroup.Item action>Fresh Food</ListGroup.Item>
            </Link>
            <Link to="/frozen_food" role="link" aria-label="frozen food list">
              <ListGroup.Item action>Frozen Food</ListGroup.Item>
            </Link>
            <Link to="/bakery" role="link" aria-label="bakery list">
              <ListGroup.Item action>Bakery</ListGroup.Item>
            </Link>
            <Link to="/dried_goods" role="link" aria-label="dried goods list">
              <ListGroup.Item action>Dried Goods</ListGroup.Item>
            </Link>
            <Link to="/drinks_confectonary" role="link" aria-label="drinks and confectionary list">
              <ListGroup.Item action>Drinks & Confectionary</ListGroup.Item>
            </Link>
            <Link to="/cleaning" role="link" aria-label="cleaning list">
              <ListGroup.Item action>Cleaning</ListGroup.Item>
            </Link>
            <Link to="/pets" role="link" aria-label="pets list">
              <ListGroup.Item action>Pets</ListGroup.Item>
            </Link>
          </ListGroup>
        </Container>
      </>
    );
  }
};

export default MenuScreen;
