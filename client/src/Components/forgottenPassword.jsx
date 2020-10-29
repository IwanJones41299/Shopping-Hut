import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';


const PasswordReset = () => {
  const history = useHistory()
  const [email,setEmail] = useState("")
  const onSubmit = () => {
    if(!email){
      console.log("error")
      return
    }
    fetch("/forgotten-password", {
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({email})
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        console.log(data.error)
      }
      else{
        console.log("sucess")
        history.push('/login')
      }
    })
  }

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control contact_input"
            required
          />
          <button onClick={() => onSubmit()} className="btn btn-block btn-primary">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
