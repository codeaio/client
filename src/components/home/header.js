import React from 'react';
import './style/header.css';
import Card from '../user/card';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: "none"
    }
  }

  render() {
    var noneStyle = { color: 'inherit', textDecoration: 'inherit'};
    var elem;
    console.log(this.state);
    if (this.state.popup == "login") {
      elem = <Card type="login" />
    }
    if (this.state.popup == "signup") {
      elem = <Card type="signup" />
    }
    console.log(elem);
    return (
      <div className="Header">
          <div className="Nav-Block">
              <div className="Logo">
                <Link to='/' style={noneStyle}>              
                  CODE<span className="SpecialChar">A</span>IO
                </Link>
              </div>
              <div className="Nav">
                <Link to='/docs' style={noneStyle}>
                  <div className="Item"><a>Docs</a></div>
                </Link>
                <Link to='/docs' style={noneStyle}>
                  <div className="Item"><a>Pricing</a></div>
                </Link>
                <Link to='/IDE' style={noneStyle}>
                  <div className="Item"><a>IDE</a></div>
                </Link>
                <Link to='/docs' style={noneStyle}>
                  <div className="Item"><a>Contact Us</a></div>
                </Link>
              </div>
              <div className="buttons">
                <div
                  className="button"
                  onClick={() => {
                    if (this.state.popup == 'login')
                      this.setState({ popup: "none" });
                    else
                      this.setState({ popup: "login" });
                  }}>
                  <span>Login</span>
                </div>
                <div
                  className="button"
                  onClick={() => {
                    if (this.state.popup == 'signup')
                      this.setState({ popup: "none" });
                    else
                      this.setState({ popup: "signup" });
                  }}>
                    <span>Register</span>
                  </div>
              </div>
          </div>
          { elem }
      </div>
    );
  }
}
