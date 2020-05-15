import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ClothingVariations extends Component {
  state = {
    description: "",
    color: "",
    category_id:this.props.match.params.id
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    const { description, color } = this.state;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleClothingVariationSubmit(this.state);
        this.props.history.push('/clothing_variations');
      }}>
        <h3>Design Your Item</h3>
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

