import React from "react";
import { Link } from "react-router-dom";

const listMenu = () => {
  return (
    <div className="container-fluid list-container">
      <h1 className="category_title">Categories</h1>
      
      <div className="list-group cateogry_list">
        <a href="fruit_veg-list" className="list-group-item list-group-item-action">
          Fruit & Veg
        </a>
        <a href="/fresh_fodos" className="list-group-item list-group-item-action">
          Fresh Foods
        </a>
        <a href="/frozen_foods" className="list-group-item list-group-item-action">
          Frozen Foods
        </a>
        <a href="/bakery" className="list-group-item list-group-item-action">
          Bakery
        </a>
        <a href="/dried_goods" className="list-group-item list-group-item-action">
          Dried Goods
        </a>
        <a href="/drinks_confectonary" className="list-group-item list-group-item-action">
          Drinks & Confectonary
        </a>
        <a href="/household" className="list-group-item list-group-item-action">
          Toiletries & Clearning
        </a>
        <a href="/pets" className="list-group-item list-group-item-action">
          Pets
        </a>
      </div>

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

export default listMenu;
