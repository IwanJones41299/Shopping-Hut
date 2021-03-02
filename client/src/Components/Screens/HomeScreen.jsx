import React from "react";
import Button from "react-bootstrap/Button";
import { Card, CardDeck } from "react-bootstrap";
import { BiListPlus } from "react-icons/bi";
import { RiPrinterCloudLine } from "react-icons/ri"
import { GoCloudDownload } from "react-icons/go"
import MobFooter from "../MobileCore/Footer";
import BsrFooter from "../BrowserCore/Footer";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import "./screens.scss";

const HomeScreen = () => {
  if (isMobile) {
    return (
      <>
        <section className="home_top">
          <div className="container-fluid content">
            <h3 className="welcome_title">Shopping Hut</h3>
            <p className="welcome_subtitle">
              Create your shopping list
              <br />
              At the click of a button
            </p>
            <Link to="/login">
              <Button variant="outline-primary" className="btn btn-login">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline-primary" className="btn btn-reg">
                Register
              </Button>
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
              <BiListPlus style={{ fontSize: "3.5em" }} />
              <h5 className="feature_title">Create your shopping list</h5>
              <p>Creating your weekly shopping list at ease.</p>
            </div>
            <div className="features_card">
              <RiPrinterCloudLine style={{ fontSize: "3.5em" }} />
              <h5 className="feature_title">Print your list</h5>
              <p>
                Print your list out in a pdf to have at quick access on your
                phone
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
        <section>
          <div className="position-relative overflow-hidden text-center bg-custom">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
              <h1 className="display-4 font-weight-normal">Shopping Hut</h1>
              <p className="lead font-weight-normal">
                Create your shopping list
                <br />
                At the click of a button
              </p>
              <Link to="/login">
                <Button variant="outline-primary" className="btn btn-login">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-primary" className="btn btn-reg">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="browser_middle">
          <CardDeck className="mt-5 ml-3 mr-3">
            <Card>
              <GoCloudDownload className="mt-4 mb-4" style={{fontSize: "4.5em", margin: "auto", color: "#EFC9AF"}} alt="Download Icon"/>
              <Card.Body>
                <Card.Title className="mb-4" style={{color: "#EFC9AF", fontSize: "2em"}}>Discover our PWA</Card.Title>
                <Card.Text style={{color: "#EFC9AF", fontSize: "1.2em"}}>
                    Install our app by adding it to <br /> your homescreen
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <BiListPlus className="mt-4 mb-4" style={{fontSize: "4.5em", margin: "auto", color: "#EFC9AF"}} alt="List Icon"/>
              <Card.Body>
                <Card.Title className="mb-4" style={{color: "#EFC9AF", fontSize: "2em"}}>Create your shoppin list</Card.Title>
                <Card.Text style={{color: "#EFC9AF", fontSize: "1.2em"}}>
                    Creating your weekly shopping list <br /> at ease.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <RiPrinterCloudLine className="mt-4 mb-4" style={{fontSize: "3.5em", margin: "auto", color: "#EFC9AF"}} alt="Printer Icon"/>
              <Card.Body>
                <Card.Title className="mb-4" style={{color: "#EFC9AF", fontSize: "2em"}}>Print your list</Card.Title>
                <Card.Text style={{color: "#EFC9AF", fontSize: "1.2em"}}>
                    Print your list out in a pdf to have at <br /> quick access on your phone
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
