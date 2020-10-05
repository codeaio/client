import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/user';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: null,
        email: null,
        password: null,
        password2: null
      },
      registered: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    var user = this.state.user;
    this.props.dispatch(registerUser(user));
    this.setState({
      registered: true
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      user: {
        [name] : value
      }
    });
  }

  render() {
    var elem;

    var form = (
      <form onSubmit={this.handleSubmit}>
        <div className="form-Item">
          <label htmlFor="email">Name</label>
          <input name="name" type="text" id="name" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <label htmlFor="password">ConfirmPassword</label>
          <input name="password2" type="password" id="password" className="input-box" onChange={this.handleChange} required></input>
        </div>
        <div className="form-Item">
          <input type="submit" id="submit" value="Submit" className="submit"></input>
        </div>
      </form>
    );

    var message = (
      <div>
        <p>Please check your inbox.</p>
      </div>
    );

    if (this.state.registered === true) {
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

SignUp = connect()(SignUp);

export default SignUp;
