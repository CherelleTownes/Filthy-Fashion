import React, { Component } from 'react'

export default class ClothingVariations extends Component {
  state = {
    description: ""
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleFoodSubmit(this.state);
        this.props.history.push('/foods');
      }}>
        <h3>Design Your Item</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
