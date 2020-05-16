import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"


const StyledStartDesign = styled.section`
  text-align: center;
 padding-top: 400px;
 @media (max-width: 425px) {
  padding-top: 1940px;
 }
`;

const Vector = styled.hr`
  width: 100%;
  border: solid .5px #BF6F6F; 
  margin: 50px 0;
`;

const Label = styled.h2`
  font-size: 32px;
  font-weight: 300;
  color: #8C1B1B;
  text-align: center;
  padding-bottom: 25px;
  font-style: italic;
`;

const Button = styled.button`
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




export default function StartDesign() {
  return (
    <StyledStartDesign>
      <Vector />
     <Label>Design Your Clothing</Label>
      <Link to="/categories"><Button>Click Here To Start</Button></Link>
      <Vector />
    </StyledStartDesign>

    
  )
}