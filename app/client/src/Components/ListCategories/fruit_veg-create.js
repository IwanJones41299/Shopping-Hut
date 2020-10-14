import React, { Component } from "react";

export default class fruit_vegCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangePersonAdded = this.onChangePersonAdded.bind(this);
    this.onChangeProductPriority = this.onChangeProductPriority.bind(this);
    this.onChangeProductFound = this.onChangeProductFound.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product_name: "",
      person_added: "",
      product_priority: "",
      product_found: false,
    };
  }

  onChangeProductName(e) {
    this.setState({
      product_name: e.target.value,
    });
  }

  onChangePersonAdded(e) {
    this.setState({
      person_added: e.target.value,
    });
  }

  onChangeProductPriority(e) {
    this.setState({
      product_priority: e.target.value,
    });
  }

  onChangeProductFound(e) {
    this.setState({
      product_found: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`form submitted`);
    console.log(`Product Name: ${this.state.product_name}`);
    console.log(`User Name: ${this.state.person_added}`);
    console.log(`Product Priority: ${this.state.product_priority}`);
    console.log(`Product Found: ${this.state.product_found}`);

    this.setState({
      product_name: "",
      person_added: "",
      product_priority: "",
      product_found: false,
    });
  }
  render() {
    return (
      <div className="container-fluid list-container">
        <h1>Create your list</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={this.state.product_name}
              onChange={this.onChangeProductName}
              placeholder="Product Name..."
            />
            <input
              type="text"
              className="form-control"
              value={this.state.person_added}
              onChange={this.onChangePersonAdded}
              placeholder="Users Name..."
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.product_priority === "Low"}
                onChange={this.onChangeProductPriority}
              />
            <label className="form-check-label"><p className="createLabel">Low</p></label>
            <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.product_priority === "Medium"}
                onChange={this.onChangeProductPriority}
              />
            <label className="form-check-label"><p className="createLabel">Medium</p></label>
            <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.product_priority === "High"}
                onChange={this.onChangeProductPriority}
              />
            <label className="form-check-label"><p className="createLabel">High</p></label>
            </div>
          </div>
          <input type="submit" value="Add Product" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}
