import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FreshFoodsList extends Component {
    render() {
        return (
            <div>
                <h3 style={{color: "white"}}>Welcome to the Fresh Foods Component page</h3>
                <Link to="/fresh_foods/create">
                    <button className="btn btn-block btn-primary">Add Product</button>
                </Link>
            </div>
        )
    }
}

