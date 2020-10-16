import React, { useContext } from "react";
import { Link } from "react-router-dom";

const search = (props) => {
  return (
    <div className="container-fluid list-container">
      <h1 className="search_title">Product Search</h1>

      {/*Search box and the results table to be displayed below here*/}

      {/* User navbar */}
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
    </div>
  );
};

export default search;
