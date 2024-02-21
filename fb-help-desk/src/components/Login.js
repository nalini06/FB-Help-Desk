import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
  state = {
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
      <div className="Login">
        <form className="form">
          <h2>Login to your account</h2>
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
          <button type="submit">Login</button>
          <p>New to MyApp? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    );
  }
}

export default Login;
