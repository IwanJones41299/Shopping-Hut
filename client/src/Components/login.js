import React, { useState, useContext } from "react";
import AuthService from "../Services/AuthService";
import Message from "./message";
import { AuthContext } from "../Context/AuthContext";
import uname_img from "../images/login.svg";
import password_img from "../images/password.svg";

const Login = (props) => {

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    //Delte following line, once testing is complete!
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      console.log(data);
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/dashboard");
      } else setMessage(message);
    });
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="card-body">
            <h3 className="signin">Sign In</h3>
          <form onSubmit={onSubmit}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={uname_img} className="login_img"></img>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={onChange}
                placeholder="username..."
              ></input>
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={password_img} className="login_img"></img>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={onChange}
                placeholder="password..."
              ></input>
            </div>

            <button className="btn btn-block login2" type="submit">
              Login
            </button>
            {/* Google login button */}
            <button className="btn btn-block google-login" type="submit">
              Google
            </button>
            {/* Facebook login button */}
            <button className="btn btn-block facebook-login" type="submit">
              Facebook
            </button>
            <div className="card-body">
              <div className="pwd-reset">
                Forgotton your
                <a href="/" className="pwd-reset">
                  {" "}
                  Password
                </a>
              </div>
              <div className="reg-link">
                Not signed up yet?
                <a href="/register" className="reg-link">
                  {" "}
                  Register now
                </a>
              </div>
            </div>
          </form>
          {message ? <Message message={message} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
