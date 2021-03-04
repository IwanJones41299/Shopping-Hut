import React, { useState } from "react";
import axios from "axios";
import MobileBottomNav from "../MobileCore/BottomNav";
import BrowserBottomNav from "../BrowserCore/BottomNav";
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
} from "react-bootstrap";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdSubject } from "react-icons/md";

const ContactScreen = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const sendForm = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = inputs;

    axios.post("/contact", {
      name,
      email,
      subject,
      text: message,
    });

    resetForm();
  };

  const resetForm = () => {
    setInputs({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  if (isMobile) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
        </Helmet>
        <main style={{ minHeight: "75vh" }}>
          <Container fluid className="signupForm">
            <Card.Body>
              <h3 className="signin">Write to us</h3>
            </Card.Body>
            <Form onSubmit={sendForm}>
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
                    value={inputs.name}
                    onChange={onChange}
                    placeholder="full name..."
                    required
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
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={onChange}
                    placeholder="email..."
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <MdSubject />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    name="subject"
                    type="text"
                    value={inputs.subject}
                    onChange={onChange}
                    placeholder="subject..."
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
                    as="textarea"
                    rows={3}
                    name="message"
                    type="text"
                    value={inputs.message}
                    onChange={onChange}
                    placeholder="type your message..."
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" className="login-btn">
                Send Message
              </Button>
            </Form>
          </Container>
        </main>
        <MobileBottomNav />
      </>
    );
  } else {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact</title>
        </Helmet>
        <main style={{ minHeight: "76vh" }}>
          <Container fluid className="browser_signupForm">
            <Row>
              <Col className="3" />
              <Col className="col-3 browser_contact">
                <h2 className="b_loginTitle">Write to us</h2>
                <Card.Text
                  className="b_loginText"
                  style={{ fontSize: "1.3em" }}
                >
                  Plese feel free to get in touch <br /> with any questions or
                  requests
                </Card.Text>
              </Col>
              <Col className="col-3 browser_login">
                <Form onSubmit={sendForm}>
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
                        value={inputs.name}
                        onChange={onChange}
                        placeholder="full name..."
                        required
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
                        name="email"
                        type="email"
                        value={inputs.email}
                        onChange={onChange}
                        placeholder="email..."
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <MdSubject />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="subject"
                        type="text"
                        value={inputs.subject}
                        onChange={onChange}
                        placeholder="subject..."
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
                        as="textarea"
                        rows={3}
                        name="message"
                        type="text"
                        value={inputs.message}
                        onChange={onChange}
                        placeholder="type your message..."
                      />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="login-btn">
                    Send Message
                  </Button>
                </Form>
              </Col>
              <Col className="Col-3" />
            </Row>
          </Container>
        </main>
        <BrowserBottomNav />
      </>
    );
  }
};

export default ContactScreen;
