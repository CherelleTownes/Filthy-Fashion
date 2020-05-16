import React from 'react'
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'

const StyledShowClothingVariations = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 25px;
  text-align: center;
  padding-left: 100px; 
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 300;
    margin-top: 50px;
    padding-bottom: 50px;
    color: #8C1B1B;
    text-align: center;
`;

const ItemLabel = styled.h3`
  font-size: 22px;
  font-weight: 400;
  color: #8C1B1B;
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
font-size: 20px;
font-weight: 300;
text-decoration: none;
color: #8C1B1B;
`;

const Button = styled.button`
  width: 100%;
  background-color: #F2C1AE; 
  color: #8C1B1B; 
  border: 2px solid #BF6F6F;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
  background-color: #BF6F6F;
  color: white;
  }
`;

const CreateButton = styled.button`
  background-color: #F2A2A2; 
  color: #8C1B1B; 
  border: 2px solid #BF6F6F;
  padding: 26px 42px;
  text-align: center;
  text-decoration: none;
  text-align: center;
  /* display: inline-block; */
  font-size: 20px;
  margin-top: 75px;
 margin-bottom: 100px;
 margin-left: 570px;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
  background-color: #BF6F6F;
  color: white;
  }
`;

export default function ShowClothingVariations(props) {
  return (
    <div>
      <Title>List Of Your Items</Title>
      
      <StyledShowClothingVariations>
        
      {props.clothing_variations.map(clothing_variation => (
        
        <React.Fragment key={clothing_variation.id}>
          <div>
          {clothing_variation.category && <ItemLabel>{clothing_variation.category.name}</ItemLabel>}
          </div>
          
          
          <StyledLink to=
            {`/clothing_variations/${clothing_variation.id}`}>
            {clothing_variation.description}<p>{clothing_variation.color}</p>
          </StyledLink>
        
          
          <Button onClick={() => {
            props.history.push(`/clothing_variations/${clothing_variation.id}/edit`);
            }}>Edit</Button>
          
          
          
              <Button onClick={() => {
            props.handleClothingVariationDelete(clothing_variation.id);
            }}>Delete</Button>
            
          <br />
        </React.Fragment>
      ))}
          
        </StyledShowClothingVariations>
      <Link to="/categories"><CreateButton>Create A New Item</CreateButton></Link>
   </div>    
  )
}

