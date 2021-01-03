import React from "react";
import "./style/header.css";
import Card from "../user/card";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/user";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: "none",
    };
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      var header = document.querySelector(".Header");
      if (this.props.stylish)
        header.classList.toggle("sticky", window.scrollY > 0);
      else {
        header.className = "Header sticky";
      }
    });
  }

  close() {
    this.setState({
      popup: "none",
    });
  }

  render() {
    var noneStyle = { color: "inherit", textDecoration: "inherit" };
    var elem;
    if (this.state.popup === "login") {
      elem = <Card type="login" close={this.close} />;
    }
    if (this.state.popup === "signup") {
      elem = <Card type="signup" close={this.close} />;
    }
    var cname = "Header";
    if (!this.props.stylish) cname += " sticky";

    var login_register = (
      <div className="buttons">
        <div
          className="button"
          onClick={() => {
            if (this.state.popup === "login") this.setState({ popup: "none" });
            else this.setState({ popup: "login" });
          }}
        >
          <span>Login</span>
        </div>
        <div
          className="button"
          onClick={() => {
            if (this.state.popup === "signup") this.setState({ popup: "none" });
            else this.setState({ popup: "signup" });
          }}
        >
          <span>Register</span>
        </div>
      </div>
    );

    var header_right;
    if (typeof this.props.user.user == "undefined") {
      header_right = login_register;
    } else {
      var user = (
        <div className="buttons">
          <Link to="/layout" style={noneStyle}>
            <div className="button">
              <span>Dashboard</span>
            </div>
          </Link>
          <div
            className="button red"
            onClick={() => {
              this.props.logout();
            }}
          >
            <span>logout</span>
          </div>
        </div>
      );
      header_right = user;
    }

    return (
      <div className={cname}>
        <div className="Nav-Block">
          <div className="Logo">
            <Link to="/" style={noneStyle}>
              CODE<span className="SpecialChar">A</span>IO
            </Link>
          </div>
          <div className="Nav">
            <Link to="/docs" style={noneStyle}>
              <div className="Item">Docs</div>
            </Link>
            <Link to="/docs" style={noneStyle}>
              <div className="Item">Pricing</div>
            </Link>
            <Link to="/IDE" style={noneStyle}>
              <div className="Item">IDE</div>
            </Link>
            <Link to="/docs" style={noneStyle}>
              <div className="Item">Contact Us</div>
            </Link>
          </div>
          {header_right}
        </div>
        {elem}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logoutUser());
    },
  };
};

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;
