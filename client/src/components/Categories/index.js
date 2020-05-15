import React from 'react'
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'

const StyledCategories = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 25px;
  justify-items: center;
`;

const SelectItems = styled.button`
  background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
  url("/Images/CategoryImg.jpg");
  background-size: cover;
  height: 500px;
  width: 500px;
  background-position: 25% 20%;
  color: white;
  font-size: 50px;
  text-transform: uppercase;
  cursor:pointer;
  :hover {
  color: #F2A2A2;}
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: 300;
    padding: 50px 0;
    color: #8C1B1B;
    text-align: center;
`;


export default function Categories(props) {
  return (
    <div>
      <Title>Pick An Item To Create</Title>
      <StyledCategories>
      {props.categories.map(category => (
        <Link to={`/categories/${category.id}`}><SelectItems key={category.id}>
          {category.name}
        </SelectItems></Link>))}
        </StyledCategories>
    
   </div>
    
    
  )
}