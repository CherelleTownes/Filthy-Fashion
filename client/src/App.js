import React, { Component } from 'react';
import GlobalStyle from './components/shared/GlobalStyle';
import Header from './components/Header';
import Login from './components/Login';
import { withRouter } from 'react-router';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper';
import Main from './components/main';





class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/');
  }




  render() {
    return (
      <div>
        <GlobalStyle />
        <Header
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Main
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
        />
      </div>
    )
  }
}

export default withRouter(App);
