import React from "react";
import { Link } from "react-router-dom";

const dashNav = () => {
  return(
    <nav className="navbar navbar-dark bottomNav">
    <ul className="navbar-nav mr-auto dashNav">
      <Link to="/dashboard">
        <li className="nav-item nav-link dash-item">Dashboard</li>
      </Link>
      <Link to="/listMenu">
        <li className="nav-item nav-link dash-item">List</li>
      </Link>
      <Link to="/search">
        <li className="nav-item nav-link dash-item">Search</li>
      </Link>
    </ul>
  </nav>
  )
};

export default dashNav;
