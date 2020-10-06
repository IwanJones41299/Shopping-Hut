import React from "react";
import { Link } from "react-router-dom";
import list from "../images/list.svg";
import search from "../images/search.svg";
import print from "../images/print.svg";

const Home = () => (
  <>
    <section className="home_top">
      <div className="container-fluid">
        <h3 className="welcome_title">Shopping Hut</h3>
        <p className="welcome_subtitle">
          Create your shopping list at
          <br />
          the click of a button
        </p>
        <Link to="/login">
          <button className="btn btn-login">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-reg">Register</button>
        </Link>
      </div>
    </section>

    <section className="home_middle">
      <div className="container-fluid">
        <h3>Discover what we are about!</h3>
        <p className="card-body">
          Our app is avilable on the PWA store to download now!
        </p>
        <a className="btn download-btn" href="https://reactjs.org/">Download</a>
      </div>
    </section>

    <section className="home_bottom">
      <div className="container-fluid">
        <h3 className="bottom_title">
          Discover the amazing feature this app has to offer
        </h3>
        <div className="features_card">
          <img
            className="feature_logo"
            src={list}
            alt="Shopping List Logo"
          ></img>
          <h5 className="feature_title">Create your shopping list</h5>
          <p>Creating your weekly shopping list at ease.</p>
        </div>
        <div className="features_card">
          <img className="feature_logo" src={search} alt="Search Logo"></img>
          <h5 className="feature_title">Search for products</h5>
          <p>
            You can search for products from named supermarkets to be able to
            compare prices of any given products.
          </p>
        </div>
        <div className="features_card">
          <img className="feature_logo" src={print} alt="Print Logo"></img>
          <h5 className="feature_title">Print your list</h5>
          <p>
            Print your list out in a pdf to have at quick access on your phone
          </p>
        </div>
      </div>
    </section>

    <footer>
      <div className="container-fluid">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://github.com/IwanJones41299" className="copyright-text"> Iwan Jones</a>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
