import React from 'react'
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png'

const StyledCategories = styled.section`
  display: grid;
`;



export default function Categories(props) {
  return (
    <div>
      <h3>Pick An Item To Create</h3>
      {props.categories.map(category => (
        <button key={category.id}>{category.name}</button>
      ))}
 <h3>TEST TEST</h3>
      {props.categories.map(category => (
        <Link to={`/categories/${category.id}`}><button key={category.id}>
          {category.name}
        </button></Link>))}
    
   </div>
    
    
  )
}