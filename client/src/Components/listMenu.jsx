import React from "react";
import { Link } from "react-router-dom";
import DashNav from './dashNav';

const listMenu = (props) => {
  return (
    <div className="container-fluid list-container">
      <h1 className="category_title">Categories</h1>
      
      <div className="list-group cateogry_list">
        <a href="/fruit_veg" className="list-group-item list-group-item-action">
          Fruit & Veg
        </a>
        <a href="/fresh_food" className="list-group-item list-group-item-action">
          Fresh Foods
        </a>
        <a href="/frozen_food" className="list-group-item list-group-item-action">
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
      <DashNav />
    </div>
  );
};

export default listMenu;
