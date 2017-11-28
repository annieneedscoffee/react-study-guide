import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FunctionsandProps from './FunctionsandProps'

class ExtraButton extends Component{
  render(){
    return(
      <button onClick={this.props.onClick}>Click me Next!</button>
    )
  }
}

export default ExtraButton;
