import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import { getAllCategories, getAllClothingVariations, getOneClothingVariation, postClothingVariation, putClothingVariation, destroyClothingVariation } from '../services/api-helper';
// import ShowFlavors from './ShowFlavors';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    categories: [],
    clothing_variations: []
  }

  componentDidMount() {
    this.readAllCategories();
    this.readAllClothingVariations();
  }

  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories })
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
        {/* <Route path='/flavors' render={() => (
          <ShowFlavors
            flavors={this.state.flavors}
          />
        )} />
        <Route exact path='/foods' render={(props) => (
          <ShowFoods
            {...props}
            handleFoodDelete={this.handleFoodDelete}
            foods={this.state.foods}
          />
        )} />
        <Route path="/foods/new" render={(props) => (
          <CreateFood
            {...props}
            handleFoodSubmit={this.handleFoodSubmit}
          />
        )} />
        <Route path='/foods/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateFood
            {...props}
            handleFoodUpdate={this.handleFoodUpdate}
            foodId={id}
          />
        }} />
        <Route exact path='/foods/:id' render={(props) => {
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
