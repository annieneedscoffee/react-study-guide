import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MyPropTypes from './MyPropTypes';
import PropTypes from 'prop-types';

class PassSomeProps extends Component{
  render(){
    return(
      <li>
      <h3>{this.props.title}</h3>
      <p>{this.props.synopsis}</p>
      <p>Pages: {this.props.numPages}, Best Pages: {this.props.bestPages}</p>
      </li>
    )
  }
}

PassSomeProps.propTypes = {
  title: PropTypes.string.isRequired,
  synopsis: PropTypes.string,
  numPages: PropTypes.number,
  bestPages: PropTypes.array
};

export default PassSomeProps;
