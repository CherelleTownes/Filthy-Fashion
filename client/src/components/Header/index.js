import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'
import Login from '../Login';
import Signup from '../Signup';


const StyledHeader = styled.header`
  background-color: #F2C1AE;
  height: 150px;
  width: 100%;
  border-bottom: 2px solid white;
  @media (max-width: 425px) {
    height: 100px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const Logo = styled(Link)`
  padding-left: 100px;
  img {
    height:145px;
  }
  @media (max-width: 425px) {
    img {
    height:90px;
  }
  padding-left: 20px;
  }
`;

const Welcome = styled.h3`
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
  color: white;
  text-transform: capitalize;
  @media (max-width: 425px) {
    font-size: 18px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #F2C1AE; 
  color: white; 
  font-weight: 300;
  border: 1px solid white;
  padding: 10px 32px;
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
  @media (max-width: 425px) {
    padding: 0px 16px;
    font-size: 14px;
    margin-top: 20px;
  }
`;

const LinkLayout = styled.div`
  padding-right:250px; 
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 75px;
  @media (max-width: 425px) {
    padding-right:0px; 
    margin-right: 10px;
    grid-column-gap: 10px;
  }
  `;

const StyledLink = styled(Link)`
font-size: 24px;
font-weight: 300;
text-decoration: none;
color: white;
@media (max-width: 425px) {
  font-size: 22px;
}
`;

export default function Header(props) {
  return (
    <StyledHeader>
      <Nav>
          <Logo exact to="/"><img src={logo} alt="Logo"></img></Logo>
        <LinkLayout>
        <div>
          {
            props.currentUser
                ?
                <>
                <Welcome>Welcome {props.currentUser.username}! Let's Create!</Welcome>
                  </>
              :
          <StyledLink to="/sign-up">Sign-up</StyledLink>
          }
          </div>


          <div>
            {
              props.currentUser
                ?
                <>
                  <Button onClick={props.handleLogout}>Sign Out</Button>
                </>
                :
          <StyledLink to="/login">Login</StyledLink>
          }
          </div>
        </LinkLayout>
      </Nav>
    </StyledHeader>
  )
}