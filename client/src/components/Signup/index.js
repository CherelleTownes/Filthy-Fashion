import React, { Component } from 'react'

export default class Signup extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const {first_name, last_name, username, email, password } = this.state;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.history.push('/categories');
      }}>
        <h3>Sign Up for an Account</h3>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          name="first_name"
          value={first_name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="last_name"
          value={last_name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }
}
