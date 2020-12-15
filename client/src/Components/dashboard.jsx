import React from "react";
import DashNav from './dashNav';

const Dashboard = (props) => {
  return (
    <div className="container-fluid dashboard-container">
      <h1 className="welcome_banner">Welcome (username)</h1>
      <DashNav />
    </div>
  );
};

export default Dashboard;
