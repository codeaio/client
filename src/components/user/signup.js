import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './style.css';

function SignUp() {
  var noneStyle = { color: 'inherit', textDecoration: 'inherit'};
  
  return (
    <div>
      <form>
        <div className="form-Item">
          <label htmlFor="email">Name</label>
          <input type="email" id="email" className="input-box" required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="input-box" required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="input-box" required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">ConfirmPassword</label>
          <input type="password" id="password" className="input-box" required></input>
        </div>
        <div className="form-Item">
          <input type="submit" id="submit" value="Submit" className="submit"></input>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
