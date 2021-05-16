import React, { Component } from 'react';
import { connect } from 'react-redux';
class RestaurantInput extends Component {
  
  state = {
    text: ''
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={event => this.handleChange(event)}></input>
          <input type="submit">Submit</input>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  addRestaurant: inputData => dispatch({type: 'ADD_RESTAURANT', payload: inputData})
})

export default connect(null, mapDispatchToProps)(RestaurantInput);
