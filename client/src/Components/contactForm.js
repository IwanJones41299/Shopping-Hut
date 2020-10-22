import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState(null);

  const sendForm = (event) => {
    event.preventDefault();

    axios
        .post('/send', { ...state })
        .then(response => {
            setResult(response.data);
            setState({ name : "", email : "", subject : "", message : ""});
        })
        .catch(() => {
            setResult({ sucess : false, message : "Something went wrong" });
        });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div className="container-fluid contact_form">
      <h1 className="contact_title">Contact Form</h1>
      <h4 className="contact_subtitle">Please fill in all details required below</h4>

      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}

      <form onSubmit={sendForm}>
        <div className="form-group">
          <input 
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name..."
            onChange={onChange}
            className="form-control contact_input" 
          />
          <input 
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email..."
            onChange={onChange}
            className="form-control contact_input" 
          />
          <input 
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Subject..."
            onChange={onChange}
            className="form-control contact_input" 
          />
          <textarea
            name="message"
            value={state.message}
            placeholder="Enter your message..."
            onChange={onChange}
            cols="30"
            rows="10"
            className="form-control contact_input"
            />
            <button className="btn btn-block btn-primary">
                Send
            </button>
        </div>
      </form>
    </div>
  );
};
// fields for the contact form -->
//full name
//email
//subject
//message

export default ContactForm;
