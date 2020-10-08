import React, { useState, useRef, useEffect } from "react";
import AuthService from "../Services/AuthService";
import Message from "../Components/message";
import uname_img from "../images/login.svg";
import password_img from "../images/password.svg";

const Register = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setUser({ name: "", username: "", email: "", password: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();
      if (!message.msgError) {
        timerID = setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="container-fluid">
        <div className="card-body">
          <h3 className="signin">Register</h3>
          <form onSubmit={onSubmit}>
          <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={password_img} className="login_img"></img>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={onChange}
                placeholder="name..."
              ></input>
            </div>

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
                type="text"
                className="form-control"
                name="email"
                onChange={onChange}
                placeholder="email..."
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
              Register
            </button>
          </form>
          {message ? <Message message={message} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
