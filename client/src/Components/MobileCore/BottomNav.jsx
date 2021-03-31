import React, { useContext } from "react";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdContacts } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import "./Mobile.scss";

const MobileBottomNav = () => {

  const { setIsAuthenticated, setUser } = useContext(
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

  return (
    <Navbar className="navbar mobile_bottomNav">
      <Nav className="m-auto">
        <Link to="/user_contact">
          <Nav className="nav-item nav-link pr-6 mr-5"><MdContacts style={{fontSize: "2em"}} aria-label="Contact Form"/></Nav>
        </Link>
        <Link to="/menu">
          <Nav className="nav-item nav-link pr-6 mr-5"><AiOutlineMenu style={{fontSize: "2em"}} aria-label="List Menu"/></Nav>
        </Link>
        <Link to="/">
          <Nav className="nav-item nav-link" onClick={onClickLogoutHandler}><GiExitDoor style={{fontSize: "2em"}} aria-label="Logout"/></Nav>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default MobileBottomNav;