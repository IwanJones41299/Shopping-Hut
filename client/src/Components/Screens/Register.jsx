import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { isMobile } from "react-device-detect";
import Message from "../Message";
import {
  Form,
  Button,
  Container,
  InputGroup,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdSupervisorAccount } from "react-icons/md";
import MobFooter from "../MobileCore/Footer";
import BsrFooter from "../BrowserCore/Footer";

const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    accountRole: "",
    password: "",
  });
  const [confirmedPasword, setConfirmedPassword] = useState("");
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
    setUser({
      name: "",
      username: "",
      email: "",
      accountRole: "",
      password: "",
    });
    setConfirmedPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.password !== confirmedPasword) {
      alert("Passwords do not match! Try again");
    } else {
      AuthService.register(user).then((data) => {
        const { message } = data;
        setMessage(message);
        resetForm();
        if (!message.msgError) {
          timerID = setTimeout(() => {
            props.history.push("/login");
          }, 1000);
        }
      });
    }
  };

  if (isMobile) {
    return (
      <>
        <main style={{ minHeight: "73vh" }}>
          <Container fluid className="signupForm">
            <Card.Body>
              <h3 className="signin">Sign Up</h3>
            </Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <RiAccountCircleLine />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={onChange}
                    placeholder="full name..."
                  />
                </InputGroup>
              </Form.Group>
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
                    value={user.username}
                    onChange={onChange}
                    placeholder="username..."
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <HiOutlineMail />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={onChange}
                    placeholder="email..."
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <MdSupervisorAccount />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <select
                    className="custom-select"
                    id="accountRole"
                    name="accountRole"
                    value={user.accountRole}
                    onChange={onChange}
                  >
                    <option selected>Choose an account type</option>
                    <option value="Personal" id="Personal">
                      Personal
                    </option>
                    <option value="Family" id="Family">
                      Family
                    </option>
                  </select>
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
                    value={user.password}
                    onChange={onChange}
                    placeholder="password..."
                    minLength={8}
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
                    name="confirmPassword"
                    type="password"
                    value={confirmedPasword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    placeholder="confirm password..."
                    minLength={8}
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="login-btn">
                Create Account
              </Button>
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
        <main style={{ minHeight: "76vh" }}>
          <Container fluid className="browser_signupForm">
            <Row>
              <Col className="3" />
              <Col className="col-3 browser_SignUptitle">
                <h2 className="b_loginTitle">Sign Up</h2>
                <Card.Text
                  className="b_loginText"
                  style={{ fontSize: "1.3em" }}
                >
                  Welcome! <br />
                  Let's get you started by creating <br /> an account
                </Card.Text>
                <Link to="/login">
                  <Card.Text className="reg-link">
                    Already have an account?
                  </Card.Text>
                </Link>
              </Col>
              <Col className="col-3 browser_login">
                <Form onSubmit={onSubmit}>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <RiAccountCircleLine />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="name"
                        type="text"
                        value={user.name}
                        onChange={onChange}
                        placeholder="full name..."
                      />
                    </InputGroup>
                  </Form.Group>
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
                        value={user.username}
                        onChange={onChange}
                        placeholder="username..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <HiOutlineMail />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={onChange}
                        placeholder="email..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <MdSupervisorAccount />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <select
                        className="custom-select"
                        id="accountRole"
                        name="accountRole"
                        value={user.accountRole}
                        onChange={onChange}
                      >
                        <option selected>Choose an account type</option>
                        <option value="Personal" id="Personal">
                          Personal
                        </option>
                        <option value="Family" id="Family">
                          Family
                        </option>
                      </select>
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
                        value={user.password}
                        onChange={onChange}
                        placeholder="password..."
                        minLength={8}
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
                        name="confirmPassword"
                        type="password"
                        value={confirmedPasword}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        placeholder="confirm password..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="login-btn">
                    Create Account
                  </Button>
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

export default Register;
