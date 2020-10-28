import React from "react";


const PasswordReset = () => {

  return (
    <div className="container-fluid contact_form">
      <h1 className="contact_title">Contact Form</h1>
      <h4 className="contact_subtitle">
        Please fill in all details required below
      </h4>

      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="email..."
            className="form-control contact_input"
            required
          />
          <button className="btn btn-block btn-primary">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
