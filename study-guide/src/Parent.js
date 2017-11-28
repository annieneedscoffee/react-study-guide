import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PropsChildren from './PropsChildren';

class Parent extends Component{
  render(){
    let Title =  `List of ${this.props.myTitle}`
    return(
      <div>
      <h3>{Title}</h3>
      <ul>{this.props.children}</ul>
      </div>
    )
  }
}

export default Parent;
