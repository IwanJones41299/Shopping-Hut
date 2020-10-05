import React from "react";
import logo from '../images/logo.jpg'

const Home = () => (
  <section className="home_page">
    <div className="container-fluid">
      <h3 className="welcome_title">Shopping Hut</h3>
      <p className="welcome_subtitle">Making shopping easier!</p>
      <center>
        <button className="btn btn-warning btn-login">Login</button>
        <button className="btn btn-warning btn-reg">Register</button>
      </center>
    </div>
  </section>
);

export default Home;
