import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.sucess) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link to="/contact">
          <li className="nav-item nav-link">Contact</li>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
        <li className="nav-item nav-link" onClick={onClickLogoutHandler}>Logout</li>
        </Link>
      </>
    );
  };

  return (
    <nav className="navbar navbar-dark bg-light app-navbar">
      <Link to="/">
        <div className="navbar-brand">
            <h5 className="nav_Title">Shopping Hut</h5>
        </div>
      </Link>
        <div className="justify-content-end">
            <ul className="navbar-nav mr-auto">
            {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;