/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import { Navbar, Alert, Button } from "react-bootstrap";
import { BiListPlus } from "react-icons/bi";
import { RiPrinterCloudLine } from "react-icons/ri";
// import { GoCloudDownload } from "react-icons/go";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated()
      .then((data) => {
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <>
          <Navbar className="navbar">
            <Navbar.Brand href="#home">
              <h5 className="nav_Title">Shopping Hut</h5>
            </Navbar.Brand>
          </Navbar>
          <Alert variant="warning">
            <h5 style={{ textAlign: "center", color: "#856404" }}>
              App is offline. Please connect to a network!
            </h5>
          </Alert>
          <main style={{minHeight: "85vh"}}>
          <section className="home_top">
          <div className="container-fluid content">
            <h3 className="welcome_title">Shopping Hut</h3>
            <p className="welcome_subtitle">
              Create your shopping list
              <br />
              At the click of a button
            </p>
          </div>
        </section>

        <section className="home_middle">
          <div className="container-fluid">
            <h3 className="pwa_title">Discover our PWA</h3>
            <p className="card-body">
              Install our app by adding it to your homescreen
            </p>
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
          </main>
          <footer>
            <div className="container-fluid">
              <div className="footer-copyright text-center py-3">
                © 2020 Copyright :
                <a
                  href="https://github.com/IwanJones41299"
                  className="copyright-text"
                >
                  Iwan Jones
                </a>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
