import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { authUser } from "../../actions/user";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email: null,
        password: null,
      },
      success: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      success: true,
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    var form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-Item">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="input-box"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="input-box"
            onChange={this.handleChange}
            required
          ></input>
        </div>
        <div className="form-Item">
          <input
            type="submit"
            id="submit"
            value="Submit"
            className="submit"
          ></input>
        </div>
      </form>
    );

    var elem;
    if (this.state.success === true) {
      if (this.props.hasError) {
        var messages = [];
        this.props.errors.forEach((error) => {
          messages.push(error.msg);
        });
        elem = (
          <div>
            {messages.map((msg) => (
              <p>{msg}</p>
            ))}
          </div>
        );
      } else {
        elem = (
          <div>
            <p>Logged In</p>
          </div>
        );
      }
    } else {
      elem = form;
    }

    return <div>{elem}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    hasError: state.user.hasError,
    errors: state.user.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(authUser(user));
    },
  };
};

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default SignIn;
