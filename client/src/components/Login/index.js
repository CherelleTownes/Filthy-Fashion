import React, { Component } from 'react'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        
        <button>Submit</button>
        
      </form>
    )
  }
}
