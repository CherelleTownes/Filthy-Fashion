import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import {
  getAllCategories,
  getOneCategory,
  getAllClothingVariations,
  getOneClothingVariation,
  postClothingVariation,
  putClothingVariation,
  destroyClothingVariation} from '../services/api-helper';
import Categories from './Categories';
import ClothingVariations from './ClothingVariations';
import ShowClothingVariations from './ShowClothingVariations';
import EditClothingVariations from './EditClothingVariations';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    categories: [],
    category: [],
    clothing_variations: []
  }

  componentDidMount() {
    this.readAllCategories();
    this.readAllClothingVariations();
    this.readOneCategory();
  }

  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories })
  }

  readOneCategory = async () => {
    const category = await getOneCategory();
    this.setState({ category})
  }

  readAllClothingVariations = async () => {
    const clothing_variations = await getAllClothingVariations();
    this.setState({ clothing_variations })
  }

  handleClothingVariationSubmit = async (clothingVariationData) => {
    const newClothingVariation = await postClothingVariation(clothingVariationData);
    this.setState(prevState => ({
      clothing_variations: [...prevState.clothing_variations, newClothingVariation]
    }))
  }

  handleClothingVariationUpdate = async (id, clothingVariationData) => {
    const updatedClothingVariation = await putClothingVariation(id, clothingVariationData);
    this.setState(prevState => ({
      clothing_variations: prevState.clothing_variations.map(clothing_variation => {
        return clothing_variation.id === id ? updatedClothingVariation : clothing_variation
      })
    }))
  }

  handleClothingVariationDelete = async (id) => {
    await destroyClothingVariation(id);
    this.setState(prevState => ({
      clothing_variations: prevState.clothing_variations.filter(clothing_variation => {
        return clothing_variation.id !== id
      })
    }))
  }


  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/sign-up' render={(props) => (
          <Signup
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route exact path='/categories' render={() => (
          <Categories
            categories={this.state.categories}
          />
        )} />
        
          <Route path='/categories/:id' render={(props) => (
          <ClothingVariations
          {...props}
          handleClothingVariationSubmit={this.handleClothingVariationSubmit}
        />
        )} />

        <Route exact path='/clothing_variations' render={(props) => (
          <ShowClothingVariations
            {...props}
            handleClothingVariationDelete={this.handleClothingVariationDelete}
            clothing_variations={this.state.clothing_variations}
          />
        )} />
        
        <Route path='/clothing_variations/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <EditClothingVariations
            {...props}
            handleClothingVariationUpdate={this.handleClothingVariationUpdate}
            clothingVariationId={id}
          />
        }} />
        {/* <Route exact path='/foods/:id' render={(props) => {
          const { id } = props.match.params
          return <FoodItem
            foodId={id}
            flavors={this.state.flavors}
          />
        }
        } /> */}
      </main>
    )
  }
}
