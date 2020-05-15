import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginImg from '../../assets/images/LoginImg.jpg';



const StyledLogin = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    align-items: center;
`;

const LoginImage = styled.img`
  width: 100%;
  height: 650px;
  border-radius: 10px;
  
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-top: -90px;
    padding-bottom: 40px;
    color: #8C1B1B;
`;

const FormLabel = styled.h3`
  font-size: 28;
  font-weight: 300;
  color: #8C1B1B;
`;

const Input = styled.input`
  width: 85%;
  padding: 12px 20px;
  font-size: 16px;
  color:  #8C1B1B;
  font-weight: 300;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom:20px;
`;

const StyledLink = styled(Link)`
font-size: 24px;
font-weight: 300;
padding-bottom: 10px;
text-decoration: underline;
color: #D9304F;
:hover {
  background-color: #BF6F6F;
  color: white;}
`;

const Button = styled.button`
  width: 85%;
  background-color: #F2C1AE; 
  color: #8C1B1B; 
  border: 2px solid #BF6F6F;
  padding: 26px 42px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
  background-color: #BF6F6F;
  color: white;
  }
`;




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
    const { username, password } = this.state;
    return (
      <StyledLogin>
        <LoginImage src={LoginImg} />
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleLogin(this.state);
        this.props.history.push('/categories');
      }}>
        <Title>Login</Title>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <br />
        <StyledLink to='/sign-up'>Create Account</StyledLink>
        <Button>Submit</Button>
        </form>
        </StyledLogin>
    )
  }
}
