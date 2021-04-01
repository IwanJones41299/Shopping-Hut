import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar } from "react-bootstrap";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsPersonPlus } from "react-icons/bs";
import "./Mobile.scss";

const Header = (props) => {
  
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(
    AuthContext
  );
  const history = useHistory();

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.sucess) {
        setUser(data.user);
        setIsAuthenticated(false);
        history.push("/")
      }
    });
  };

  const unauthenticatedNavbar = () => {
    return (
      <>
        <Link to="/login">
          <Nav className="nav-item nav-link login-mobile"><RiAccountCircleLine aria-label="Login" /></Nav>
        </Link>
        <Link to="/register">
          <Nav className="nav-item nav-link reg-mobile"><BsPersonPlus aria-label="Register"/></Nav>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        <Nav className="nav-item nav-link" onClick={onClickLogoutHandler}>Logout</Nav>
      </>
    );
  };

  return (
    <Navbar className="navbar">
      <Link to="/">
      <Navbar.Brand>
        <h1 className="nav_Title" style={{fontSize: "1em"}}>Shopping Hut</h1>
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;