import React, { Component } from "react";
import axios from 'axios';


class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      showError: false,
      messageFromDb: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = e => {
    e.preventDefault();
    if(this.state.email === ''){
      this.setState({
        showError: false,
        messageFromDb: '',
      });
    } else {
      axios
        .post('http://localhost:3000/forgotPassword', {
          email: this.state.email,
        })
        .then(response => {
          console.log(response.data);
          if (response.data === 'email not in db'){
            this.setState({
              showError: true,
              messageFromDb: '',
            });
          }else if(response.data === 'recovery email sent'){
            this.setState({
              showError: false,
              messageFromDb: 'recovery email sent',
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  };

  render() {
    const { email, messageFromDb, showNullError, showError} = this.state;

    return (
      <div className="container-fluid contact_form">
        <h1 className="contact_title">Contact Form</h1>
        <h4 className="contact_subtitle">
          Please fill in all details required below
        </h4>
  
        <form onSubmit={this.sendEmail}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              placeholder="email..."
              value={email}
              onChange={this.handleChange('email')}
              className="form-control contact_input"
              required
            />
            <button type="submit" className="btn btn-block btn-primary">Reset Password</button>
          </div>
        </form>
        {showNullError && (
          <div><p>Email cannot be blank</p></div>
        )}
        {showError && (
          <div><p>This email address isnt registered to a user</p></div>
        )}
        {messageFromDb === 'recovery email sent' && (
          <div>Email sent!!!!</div>
        )}
      </div>
    );
  };
}



export default ForgotPassword;
