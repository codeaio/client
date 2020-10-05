import React, { Component } from "react";
import "./style/main.css";
import { Link } from "react-router-dom";
import anim from './util/main-anime.js';

export default class Main extends Component {
  componentDidMount() {
    anim();
  }
  
  render() {
    return (
      <div className="Main">
        <div className="Main-Block">
          <div>
            <h1>Welcome to CodeAio</h1>
            <p>
              Supported Language <span className="typed-text"></span>
              <span className="cursor">&nbsp;</span>
            </p>
            <Link to="/IDE">
              <div className="Buttons">
                <span>Try now</span>
              </div>
            </Link>
          </div>
          <div className="Bg"></div>
        </div>
      </div>
    );
  }
}
