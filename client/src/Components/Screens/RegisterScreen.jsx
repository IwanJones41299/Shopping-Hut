import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import {
  Form,
  Button,
  Container,
  InputGroup,
  Card,
  Row,
  Col,
  Alert,
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      setError("Passwords do not match!");
    } else {
      AuthService.register(user).then((data) => {
        const { message } = data;
        setSuccess("Registration sucessful");
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registration</title>
        </Helmet>
        <main style={{ minHeight: "74vh" }}>
          <Container fluid className="signupForm">
            <Card.Body>
              <h3 className="signin">Sign Up</h3>
            </Card.Body>
            <Form onSubmit={onSubmit}>
              {error !== "" ? <Alert variant="danger">{error}</Alert> : ""}
              {success !== "" ? <Alert variant="success">{success}</Alert> : ""}
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <RiAccountCircleLine />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    aria-label="name"
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
                    aria-label="username"
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
                    aria-label="email"
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
                    aria-label="account type select option"
                    className="custom-select"
                    id="accountRole"
                    name="accountRole"
                    value={user.accountRole}
                    onChange={onChange}
                  >
                    <option selected>Choose an account type</option>
                    <option
                      value="Personal"
                      id="Personal"
                      aria-label="personal"
                    >
                      Personal
                    </option>
                    <option value="Family" id="Family" aria-label="family">
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
                    aria-label="password"
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
                    aria-label="confirm password"
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
              <Link to="/login">
                <Card.Text className="reg-link">
                  Already have an account?
                </Card.Text>
              </Link>
            </Form>
          </Container>
        </main>
        <MobFooter />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Registration</title>
        </Helmet>
        <main style={{ minHeight: "83vh" }}>
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
                  {error !== "" ? <Alert variant="danger">{error}</Alert> : ""}
                  {success !== "" ? (
                    <Alert variant="sucess">{success}</Alert>
                  ) : (
                    ""
                  )}
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <RiAccountCircleLine role="img" aria-label="Human shoulder to head picture, with circle outline"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        aria-label="name"
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
                          <BsFillPersonFill role="img" aria-label="Human shoulder to head picture"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        aria-label="username"
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
                          <HiOutlineMail role="img" aria-label="Mail icon"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        aria-label="email"
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
                          <MdSupervisorAccount role="img" aria-label="Human shoulder to head picture"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <select
                        aria-label="account type select option"
                        className="custom-select"
                        id="accountRole"
                        name="accountRole"
                        value={user.accountRole}
                        onChange={onChange}
                      >
                        <option selected>Choose an account type</option>
                        <option
                          value="Personal"
                          id="Personal"
                          aria-label="personal"
                        >
                          Personal
                        </option>
                        <option value="Family" id="Family" aria-label="family">
                          Family
                        </option>
                      </select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <RiLockPasswordLine role="img" aria-label="Lock Icon"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        aria-label="password"
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
                          <RiLockPasswordLine role="img" aria-label="Lock Icon"/>
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        aria-label="confirm password"
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
