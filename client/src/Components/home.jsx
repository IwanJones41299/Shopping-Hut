import React from "react";
import { Link } from "react-router-dom";

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
        <a className="btn download-btn" href="https://reactjs.org/">
          Download
        </a>
      </div>
    </section>

    <section className="home_bottom">
      <div className="container-fluid">
        <h3 className="bottom_title">
          Discover the amazing feature this app has to offer
        </h3>
        <div className="features_card">
          <svg className="feature_logo"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 16 16"
            //className="bi bi-card-checklist"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <h5 className="feature_title">Create your shopping list</h5>
          <p>Creating your weekly shopping list at ease.</p>
        </div>
        <div className="features_card">
          <svg
            width="2.5em"
            height="2.5em"
            viewBox="0 0 16 16"
            className="bi bi-search"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
          <h5 className="feature_title">Search for products</h5>
          <p>
            You can search for products from named supermarkets to be able to
            compare prices of any given products.
          </p>
        </div>
        <div className="features_card">
          <svg
            width="2.5em"
            height="2.5em"
            viewBox="0 0 16 16"
            className="bi bi-cloud-download"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
            />
            <path
              fillRule="evenodd"
              d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            />
          </svg>
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
          <a
            href="https://github.com/IwanJones41299"
            className="copyright-text"
          >
            Iwan Jones
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default Home;
