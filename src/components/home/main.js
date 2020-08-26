import React, { Component } from "react";
import "./style/main.css";
import { Link } from "react-router-dom";

export default class Main extends Component {
  componentDidMount() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["C++", "Java", "HTML", "CSS", "Javascript"];
    const typingDelay = 250;
    const erasingDelay = 150;
    const newTextDelay = 250; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(
          charIndex
        );
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    document.addEventListener("DOMContentLoaded", function () {
      // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
  }
  render() {
    var noneStyle = { color: "inherit", textDecoration: "inherit" };

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
              <div class="Buttons">
                <a>Try now</a>
              </div>
            </Link>
          </div>
          <div className="Bg"></div>
        </div>
      </div>
    );
  }
}
