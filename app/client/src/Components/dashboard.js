import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="container-fluid dashboard-container">
      <h1 className="welcome_banner">Welcome (username)</h1>
      <nav className="navbar navbar-dark bg-light bottomNav">
        <div className="justify-content-center">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-link">Contact</li>
          <li className="nav-item nav-link">Contact</li>
          <li className="nav-item nav-link">Contact</li>
          <li className="nav-item nav-link">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
