import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SomeProps from './SomeProps';

class ThisStuff extends Component{
  render(){
    return(
      <div>
      <h1>This</h1>
      <p>You can use this to refer to a specific instance of something such as a component class. This will be more useful once we start using props and state. </p>
      </div>
    )
  }
}

export default ThisStuff;
