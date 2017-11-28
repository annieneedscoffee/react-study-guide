import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class FunctionsandProps extends Component{
  clicky(){
    alert(`I'm a click handler. I'm a little different from the click handler you saw in the event listeners section but I work just as well! P.S. Look at how I got the apostrophe into I'm without causing a problem in the code.`)
  }
  render(){
    return(
      <div>
      <h1>Functions and Props</h1>
      <p>Here is the content from my FunctionsandProps component. It can be useful to put functions into props, for example, when you are dealing with click handlers.</p>
      <button onClick={this.clicky}>Click Here!</button>
      </div>
    )
  }
}

export default FunctionsandProps;
