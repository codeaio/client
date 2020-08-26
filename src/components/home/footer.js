import React, { Component } from "react";
import "./style/footer.css";

export default class Footer extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      var footer = document.querySelector(".Footer");
      footer.classList.toggle("disappear", window.scrollY > 0);
    });
  }
  render() {
    return (
      <div className="Footer">
        <section>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          <div className="wave wave5"></div>
          <div className="wave wave6"></div>
        </section>
      </div>
    );
  }
}
