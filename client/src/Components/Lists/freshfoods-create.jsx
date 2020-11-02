import React, { Component } from "react";

export default class FreshFoodsCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      quantity: Number,
      user: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted`);
    console.log(`Item name : ${this.state.name}`);
    console.log(`Item quantity : ${this.state.quantity}`);
    console.log(`Added by  : ${this.state.user}`);

    this.setState = {
      name: "",
      quantity: Number,
      user: "",
    };
  }

  resetForm = () => {
    this.setState({
      name: "",
      quantity: "",
      user: "",
      completed: false,
    });
  };

  render() {
    return (
      <div>
        <h3 style={{ color: "white" }}>
          Welcome to the Fresh Foods create Component page
        </h3>
        <div>
          <div className="container-fluid">
            <form onSubmit={this.onSubmit}>
              <input
                className="form-control product_input"
                type="text"
                placeholder="Please enter an item"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              <input
                className="form-control product_input"
                type="text"
                placeholder="Please enter the amount you want..."
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
              />
              <input
                className="form-control product_input"
                type="text"
                placeholder="Add your name..."
                value={this.state.user}
                onChange={this.onChangeUser}
              />
              <button
                className="btn btn-primary btn-block btn-add"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
          {/* <table class="table table-borderless">
            <thead class="thead-primary">
              <tr>
                <th scope="col"> Product </th> <th scope="col"> Quantity </th>
                <th scope="col"> User </th> <th scope="col"> Edit / Delete </th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list) => {
                return <ListItem key={list._id} list={list} />;
              })}
            </tbody>
          </table>; */}
        </div>
      </div>
    );
  }
}
