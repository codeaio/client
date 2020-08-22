import React from 'react';
import './style/header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Nav-Block">
            <div className="Logo">
              CODE<span className="SpecialChar">A</span>IO
            </div>
            <div className="Nav">
              <div className="Item"><a>Docs</a></div>
              <div className="Item"><a>Pricing</a></div>
              <div className="Item"><a>IDE</a></div>
              <div className="Item"><a>Contact Us</a></div>
            </div>
            <div className="buttons">
              <div className="button"><span>Login</span></div>
              <div className="button"><span>Register</span></div>
            </div>
        </div>
    </div>
  );
}

export default Header;
