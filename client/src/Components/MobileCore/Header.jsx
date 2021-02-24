import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext"
import { RiAccountCircleLine } from "react-icons/ri";
import { BsPersonPlus } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import "./Mobile.scss";

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
          <li className="nav-item nav-link login-mobile"><RiAccountCircleLine /></li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link reg-mobile"><BsPersonPlus /></li>
        </Link>
      </>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <>
        <Link to="/">
        <li className="nav-item nav-link" onClick={onClickLogoutHandler}><AiOutlinePoweroff style={{fontSize: "1.5em"}}/></li>
        </Link>
      </>
    );
  };

  return (
    <nav className="navbar">
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

export default Header;