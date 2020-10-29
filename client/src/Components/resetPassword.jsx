import React, { Component } from "react";
import axios from "axios";

const loading = {
  margin: "1em",
  fontSize: "30px",
};

export default class ResetPassword extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      update: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.token);
    await axios
      .get("http://localhost:3000/reset", {
        params: {
          resetToken: this.props.match.params.token,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === "password reset like a-ok") {
          this.setState({
            username: response.data.username,
            update: false,
            isLoading: false,
            error: false,
          });
        } else {
          this.setState({
            update: false,
            isLoading: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updatePassword", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.message === "password updated") {
          this.setState({
            update: true,
            error: false,
          });
        } else {
          this.setState({
            update: false,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  render() {
    const { password, error, isLoading, update } = this.state;

    if (error) {
      return (
        <div className="container-fluid contact_form">
          <h1 className="contact_title">Reset Form</h1>
          <h4 className="contact_subtitle">
            There has been a problem resetting your password. Please request
            another link.
          </h4>
        </div>
      );
    } else if (isLoading) {
      return (
        <div className="container-fluid contact_form">
          <h1 className="contact_title">Reset Form</h1>
          <h4 className="contact_subtitle">Loading...</h4>
        </div>
      );
    } else {
      return (
        <div>
        <div className="container-fluid contact_form">
          <h1 className="contact_title">Reset Form</h1>
          <h4 className="contact_subtitle">Enter new password</h4>
        </div>
        <form onSubmit={this.updatePassword}>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="password..."
              value={password}
              onChange={this.handleChange("password")}
              className="form-control contact_input"
              required
            />
            <button type="submit" className="btn btn-block btn-primary">
              Reset Password
            </button>
          </div>
        </form>
        {update && (
            <div>
                <p>Your password has sucessfully been reset</p>
            </div>
        )}
        </div>
      );
    }
  }
}
