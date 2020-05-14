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
        <p key={clothing_variation.id}>{clothing_variation.description}{clothing_variation.color}</p>
      ))}
   </div>    
  )
}