import React from "react";
import SignIn from "./login";
import SignUp from "./signup";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var element;

    if (this.props.type === "login") {
      element = <SignIn />;
    } else {
      element = <SignUp />;
    }

    return (
      <div className="PopUp">
        <div className="Close" onClick={this.props.close}>
          X
        </div>
        <div className="Card">{element}</div>
      </div>
    );
  }
}
