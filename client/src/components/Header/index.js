import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'
import Login from '../Login';


const StyledHeader = styled.header`
  background-color: #F2C1AE;
  height: 175px;
  width: 100%;
  border-bottom: 5px solid white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const Logo = styled(Link)`
  padding-left: 100px;
  img {
    height:170px;
  }
`;

const LinkLayout = styled.div`
  padding-right:250px; 
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 75px;
  `;

const StyledLink = styled(Link)`
font-size: 24px;
text-decoration: none;
color: white;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
          <Logo exact to="/"><img src={logo} alt="Logo"></img></Logo>
        <LinkLayout>
          <div>
          <StyledLink to="/sign-up">Sign-up</StyledLink>
          </div>
          <div>
          <StyledLink to="/login">Login</StyledLink>
          </div>
        </LinkLayout>
      </Nav>

      <Route path="/login" render={() => (
        <Login />
      )} />
      
    </StyledHeader>
  )
}