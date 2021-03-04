import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdContacts } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import "./Browser.scss";

const BrowserBottomNav = () => {
  return (
    <Navbar className="navbar bottom-nav">
      <Nav className="m-auto">
        <Link to="/user_contact">
          <Nav className="nav-item nav-link pr-6 mr-5 userNav">
            <MdContacts style={{ fontSize: "1.5em" }} />
          </Nav>
        </Link>
        <Link to="/menu">
          <Nav className="nav-item nav-link pr-6 mr-5 userNav">
            <AiOutlineMenu style={{ fontSize: "1.5em" }} />
          </Nav>
        </Link>
      </Nav>
    </Navbar>
  );
};
export default BrowserBottomNav;
