import React from 'react'
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'

const StyledCategories = styled.section`
  display: grid;
`;

export default function ShowClothingVariations(props) {
  return (
    <div>
      <h3>All Clothing Variations</h3>
      
      {props.clothing_variations.map(clothing_variation => (
        
        <React.Fragment key={clothing_variation.id}>
          {clothing_variation.category.name && <h3>{clothing_variation.category.name}</h3>}
          <Link to=
            {`/clothing_variations/${clothing_variation.id}`}>
            {clothing_variation.description}{clothing_variation.color}
          </Link>
          <button onClick={() => {
            props.history.push(`/clothing_variations/${clothing_variation.id}/edit`);
          }}>Edit</button>
              <button onClick={() => {
            props.handleClothingVariationDelete(clothing_variation.id);
          }}>Delete</button>
          <br />
        </React.Fragment>
      ))}
      <Link to="/categories"><button>Create A New Item</button></Link>
   </div>    
  )
}

