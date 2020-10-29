import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
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

  return (
    <div className="container-fluid contact_form">
      <h1 className="contact_title">Contact Form</h1>
      <h4 className="contact_subtitle">
        Please fill in all details required below
      </h4>

      <form onSubmit={sendForm}>
        <div className="form-group">
          <label htmlFor="required" className="float-left">
            <strong>Required **</strong>
          </label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            placeholder="Enter your full name..."
            onChange={onChange}
            className="form-control contact_input"
            required
          />
          <label htmlFor="required" className="float-left">
            <strong>Required **</strong>
          </label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            placeholder="Enter your email..."
            onChange={onChange}
            className="form-control contact_input"
            required
          />
          <label htmlFor="required" className="float-left">
            <strong>Required **</strong>
          </label>
          <input
            type="text"
            name="subject"
            value={inputs.subject}
            placeholder="Subject..."
            onChange={onChange}
            className="form-control contact_input"
            required
          />
          <textarea
            name="message"
            value={inputs.message}
            placeholder="Enter your message..."
            onChange={onChange}
            cols="30"
            rows="10"
            className="form-control contact_input"
            //Do I add a required field for validation???
          />
          <button className="btn btn-block btn-primary">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
