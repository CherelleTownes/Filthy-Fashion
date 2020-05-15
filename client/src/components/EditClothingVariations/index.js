import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getOneClothingVariation} from '../../services/api-helper';

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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleClothingVariationUpdate(this.props.clothingVariationId, this.state);
        this.props.history.push('/clothing_variations');
      }}>
        <h3>Edit Your Item</h3>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          name="color"
          value={color}
          onChange={this.handleChange}
        />
        <br />
        <Link to='/categories'>Pick a New Item</Link>
        <button>Submit</button>
      </form>
      
    )
  }
}
