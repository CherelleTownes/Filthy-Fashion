import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getOneClothingVariation } from '../../services/api-helper';
import styled from 'styled-components';

const StyledEditClothingVariations = styled.section`
  text-align: center;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 400;
    margin-top: 50px;
    padding-bottom: 40px;
    color: #8C1B1B;
`;

const FormLabel = styled.h3`
  font-size: 24px;
  font-weight: 300;
  color: #8C1B1B;
  padding-bottom: 20px;
  padding-top: 30px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight:300;
  color: #8C1B1B;
  padding-bottom: 15px;
`;

const Description = styled.input`
  width: 85%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  /* resize: none; */
  font-size: 16px;
  font-weight: 300;
`;

const Color = styled.input`
  width: 25%;
  padding: 12px 20px;
  font-size: 16px;
  color:  #8C1B1B;
  font-weight: 300;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  margin-bottom:20px;
`;

const StyledLink = styled(Link)`
font-size: 24px;
font-weight: 300;
margin-top: 20px;
padding-bottom: 10px;
text-decoration: underline;
color: #D9304F;
:hover {
  background-color: #BF6F6F;
  color: white;}
`;

const Button = styled.button`
  width: 25%;
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









export default class EditClothingVariations extends Component {
  state = {
    description: "",
    color: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const clothingVariationItem = await getOneClothingVariation(this.props.clothingVariationId);
    this.setState({
      description: clothingVariationItem.description,
      color: clothingVariationItem.color
    })
  }


  render() {
    const { description, color } = this.state;
    return (
      <StyledEditClothingVariations>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleClothingVariationUpdate(this.props.clothingVariationId, this.state);
        this.props.history.push('/clothing_variations');
      }}>
          <Title>Edit Your Item</Title>
          <Text>Need to make a change to your item? Make your edits below and submit the form.</Text>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Description
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <br />
        <FormLabel htmlFor="color">Color</FormLabel>
        <Color
          id="color"
          type="text"
          name="color"
          value={color}
          onChange={this.handleChange}
        />
          <br />
          <div>
          <StyledLink to='/categories'>Pick a New Item</StyledLink>
          </div>
        <Button>Submit</Button>
      </form>
      </StyledEditClothingVariations>
    )
  }
}
