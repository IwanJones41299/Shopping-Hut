import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import "./Browser.scss";
import { Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
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
        <Link to="/login">
          <Nav className="nav-item nav-link login">Login</Nav>
        </Link>
        <Link to="/register">
          <Nav className="nav-item nav-link reg">Register</Nav>
        </Link>
        <Link to="/contact">
          <Nav className="nav-item nav-link reg">Contact</Nav>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
          <Nav className="nav-item nav-link reg" onClick={onClickLogoutHandler}>Logout</Nav>                    
        </Link>
      </>
    );
  };

  return (
    <Navbar className="navbar" expand="md">
      <Link to="/">
      <Navbar.Brand href="#home">
        <h1 className="nav_Title" style={{fontSize : "1.2em"}}>Shopping Hut</h1>
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
