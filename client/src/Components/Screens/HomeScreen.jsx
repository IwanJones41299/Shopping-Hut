import React from "react";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import { Card, CardDeck } from "react-bootstrap";
import { BiListPlus } from "react-icons/bi";
import { FaWalking } from "react-icons/fa";
import { GoCloudDownload } from "react-icons/go";
import MobFooter from "../MobileCore/Footer";
import BsrFooter from "../BrowserCore/Footer";
import { isMobile, isTablet } from "react-device-detect";
import { Link } from "react-router-dom";
import "./screens.scss";

const HomeScreen = () => {
  if (isMobile || isTablet) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Shopping Hut Home Page</title>
        </Helmet>
        <section className="home_top">
          <div className="container-fluid content">
            <h2 className="welcome_title">Shopping Hut</h2>
            <p className="welcome_subtitle">
              Create your shopping list
              <br />
              At the click of a button
            </p>
            <Link to="/login" variant="outline-primary" className="btn btn-login">
                Login
            </Link>
            <Link to="/register" variant="outline-primary" className="btn btn-reg">
                Register
            </Link>
          </div>
        </section>

        <section className="home_middle">
          <div className="container-fluid">
            <h3 className="pwa_title">Discover our PWA</h3>
            <p className="card-body">
              Install our app by adding it to your homescreen
            </p>
            <Link to="/contact">
              <Button variant="outline-primary" className="btn btn-login">
                Contact
              </Button>
            </Link>
          </div>
        </section>

        <section className="home_bottom">
          <div className="container-fluid">
            <h3 className="bottom_title">
              Discover the amazing feature this app has to offer
            </h3>
            <div className="features_card">
              <BiListPlus style={{ fontSize: "3.5em" }} role="img" aria-label="Cloud download icon" />
              <h4 className="feature_title">Create your shopping list</h4>
              <p>Creating your weekly shopping list at ease.</p>
            </div>
            <div className="features_card">
              <FaWalking style={{ fontSize: "3.5em" }} role="img" aria-label="Person walking" />
              <h5 className="feature_title">List Access</h5>
              <p>
                Access your list on the go
                where ever you are
              </p>
            </div>
          </div>
        </section>

        <MobFooter />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Shopping Hut Home Page</title>
        </Helmet>
        <section>
          <div className="position-relative overflow-hidden text-center bg-custom">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h2 className="display-4 font-weight-normal">Shopping Hut!</h2>
              <p className="lead font-weight-normal">
                Create your shopping list
                <br />
                At the click of a button
              </p>
              <Link to="/login" variant="outline-primary" className="btn btn-login">
                  Login
              </Link>
              <Link to="/register" variant="outline-primary" className="btn btn-reg">
                  Register
              </Link>
            </div>
          </div>
        </section>

        <section className="browser_middle">
          <CardDeck className="mt-5 ml-3 mr-3">
            <Card>
              <GoCloudDownload
                className="mt-4 mb-4"
                style={{ fontSize: "4.5em", margin: "auto", color: "#EFC9AF" }}
                role="img"
                aria-label="Cloud download icon"
              />
              <Card.Body>
                <Card.Title
                  className="mb-4"
                  style={{ color: "#EFC9AF", fontSize: "2em" }}
                >
                  Discover our PWA
                </Card.Title>
                <Card.Text style={{ color: "#EFC9AF", fontSize: "1.2em" }}>
                  Install our app by adding it to <br /> your homescreen
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <BiListPlus
                className="mt-4 mb-4"
                style={{ fontSize: "4.5em", margin: "auto", color: "#EFC9AF" }}
                role="img" 
                aria-label="List Icon"
              />
              <Card.Body>
                <Card.Title
                  className="mb-4"
                  style={{ color: "#EFC9AF", fontSize: "2em" }}
                >
                  Create your shoppin list
                </Card.Title>
                <Card.Text style={{ color: "#EFC9AF", fontSize: "1.2em" }}>
                  Creating your weekly shopping list <br /> at ease
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <FaWalking
                className="mt-4 mb-4"
                style={{ fontSize: "3.5em", margin: "auto", color: "#EFC9AF" }}
                role="img" 
                aria-label="Person Walking"
              />
              <Card.Body>
                <Card.Title
                  className="mb-4"
                  style={{ color: "#EFC9AF", fontSize: "2em" }}
                >
                  List Access
                </Card.Title>
                <Card.Text style={{ color: "#EFC9AF", fontSize: "1.2em" }}>
                  Access your list on the go <br /> where ever you are
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </section>

        <BsrFooter />
      </>
    );
  }
};

export default HomeScreen;
