import React, { Component } from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;

    return (
      <div className="pokebox">
        <div className="pokedata">
          <span>{name}</span><br/>
          <span>{type}</span><br/>
          <span>{`Average Weight: ${averageWeight.value} 
            ${averageWeight.measurementUnit}`}</span>
        </div>
        <img className="pokeimage" src={image} alt={name}/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number
  }),
  image: PropTypes.string
};

export default Pokemon;
