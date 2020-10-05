import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import './style.css';
import { connect } from 'react-redux';
import { authUser } from '../../actions/user';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      login: {
        email: null,
        password: null
      },
      success: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  setToken(token) {
    this.setState({
      userToken: token
    });
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(authUser(this.state));
    this.setState({
      success: true
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }

  render() {   
    var form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-Item">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <input type="submit" id="submit" value="Submit" className="submit"></input>
        </div>
      </form>
    );

    var message = (
      <div>
        <p>Logged In.</p>
      </div>
    );

    var elem;
    if (this.state.success == true) {
      elem = message;
    } else {
      elem = form;
    }

    return (
      <div>
        { elem }
      </div>
    );
  }
}

SignIn = connect()(SignIn);
export default SignIn;
