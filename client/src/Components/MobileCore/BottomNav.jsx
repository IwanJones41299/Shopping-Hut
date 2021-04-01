import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { AuthContext } from "../../Context/AuthContext";
import { Nav, Navbar } from "react-bootstrap";
import { MdContacts } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiExitDoor } from 'react-icons/gi'
import "./Mobile.scss";

const MobileBottomNav = () => {

  const { setIsAuthenticated, setUser } = useContext(
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

  return (
    <Navbar className="navbar mobile_bottomNav">
      <Nav className="m-auto">
        <Link to="/user_contact" aria-label="Contact From">
          <Nav className="nav-item nav-link pr-6 mr-5"><MdContacts style={{fontSize: "2em"}} aria-label="Contact Form"/></Nav>
        </Link>
        <Link to="/menu" aria-label="List Menu">
          <Nav className="nav-item nav-link pr-6 mr-5"><AiOutlineMenu style={{fontSize: "2em"}} aria-label="List Menu"/></Nav>
        </Link>
          <Nav className="nav-item nav-link" onClick={onClickLogoutHandler}><GiExitDoor style={{fontSize: "2em"}} aria-label="Logout"/></Nav>
      </Nav>
    </Navbar>
  );
};

export default MobileBottomNav;