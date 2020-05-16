import React, { Component } from 'react'
import styled from 'styled-components';
import SignupImg from '../../assets/images/SignupImg.jpg';



const StyledSignUp = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    align-items: center;
    @media (max-width: 425px) {
      grid-template-columns: 1fr;
    }
`;

const SignUpImage = styled.img`
  width: 100%;
  height: 650px;
  border-radius: 10px;
  @media (max-width: 425px) {
    height: 300px;
    border-radius: 0px;
  }
`;

const Form = styled.form`
  @media (max-width: 425px) {
    text-align: center;
  }
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    padding: 40px 0;
    color: #8C1B1B;
`;

const FormLabel = styled.h3`
  font-size: 28;
  font-weight: 300;
  color: #8C1B1B;
`;

const Input = styled.input`
  width: 85%;
  font-size: 16px;
  color:  #8C1B1B;
  font-weight: 300;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
      <StyledSignUp>
        <SignUpImage src={SignupImg} />
      <Form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        this.props.history.push('/categories');
      }}>
        <Title>Sign Up for an Account</Title>
        <FormLabel htmlFor="first-name">First Name</FormLabel>
        <Input
          id="first-name"
          type="text"
          name="first_name"
          value={first_name}
          onChange={this.handleChange}
        />
        <br />
        <FormLabel htmlFor="last-name">Last Name</FormLabel>
        <Input
          id="last-name"
          type="text"
          name="last_name"
          value={last_name}
          onChange={this.handleChange}
        />
        <br />
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="text"
          name="email"
          value={email}
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
        <Button>Submit</Button>
      </Form>
      </StyledSignUp>
    )
  }
}
