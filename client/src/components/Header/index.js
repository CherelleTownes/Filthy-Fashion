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
`;

const LinkLayout = styled.div`
  padding-right:250px; 
  display:grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 75px;
  `;

const StyledLink = styled(Link)`
font-size: 24px;
font-weight: 300;
text-decoration: none;
color: white;
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
                <h3>Welcome {props.currentUser.username}! Let's Create!</h3>
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
                  <button onClick={props.handleLogout}>Sign Out</button>
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