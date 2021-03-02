import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { isMobile } from "react-device-detect";
import Message from "../Message";
import { AuthContext } from "../../Context/AuthContext";
import {
  Form,
  Button,
  Container,
  InputGroup,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import MobFooter from "../MobileCore/Footer";
import BsrFooter from "../BrowserCore/Footer";

const LoginScreen = (props) => {
  const [user, setUser] = useState({ username: ""});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;
      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        props.history.push("/menu");
      } else{
        setMessage(message);
      }
    });
  };

  if (isMobile) {
    return (
      <>
        <main>
          <Container fluid className="loginForm">
            <Card.Body>
              <h3 className="signin">Log In</h3>
            </Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <BsFillPersonFill />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="username"
                    type="text"
                    onChange={onChange}
                    placeholder="username..."
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <RiLockPasswordLine />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={onChange}
                    placeholder="password..."
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="login-btn">
                Login
              </Button>
              <Link to="/reset">
                <Card.Text className="reg-link">Reset Password...</Card.Text>
              </Link>
              <Link to="/register">
                <Card.Text className="reg-link">Create an account...</Card.Text>
              </Link>
            </Form>
            {message ? <Message message={message} /> : null}
          </Container>
        </main>
        <MobFooter />
      </>
    );
  } else {
    return (
      <>
        <main className="browserMain">
          <Container fluid className="browser_loginForm">
            <Row>
              <Col className="3" />
              <Col className="col-3 browser_title">
                <h2 className="b_loginTitle">Login Form</h2>
                <Card.Text
                  className="b_loginText"
                  style={{ fontSize: "1.3em" }}
                >
                  Welcome Back! <br />
                  Sign in and carry on creating your <br /> shopping list
                </Card.Text>
                <Link to="/register">
                  <Card.Text className="reg-link">
                    Create an account...
                  </Card.Text>
                </Link>
              </Col>
              <Col className="col-3 browser_login">
                <Form onSubmit={onSubmit}>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <BsFillPersonFill />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="username"
                        type="text"
                        onChange={onChange}
                        placeholder="username..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <RiLockPasswordLine />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="password"
                        type="password"
                        onChange={onChange}
                        placeholder="password..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="login-btnBrowser btn-block"
                  >
                    Login
                  </Button>
                  <Link to="/reset">
                    <Card.Text className="reg-link mt-4">
                      Reset Password...
                    </Card.Text>
                  </Link>
                  {message ? <Message message={message} /> : null}
                </Form>
              </Col>
              <Col className="Col-3" />
            </Row>
          </Container>
        </main>
        <BsrFooter />
      </>
    );
  }
};

export default LoginScreen;
