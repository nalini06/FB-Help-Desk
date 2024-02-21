import React from 'react';
import '../styles/SignUp.css';

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    rememberMe: false
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  render() {
    return (
      <div className="SignUp">
        <form className="form">
          <h2>Create Account</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.handleChange}
            />
            Remember Me
          </label>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    );
  }
}

export default SignUp;
