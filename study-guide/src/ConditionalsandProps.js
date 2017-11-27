import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ConditionalsandProps extends Component{
  render(){

    return(
      <div>
      <h1>Conditionals and Props</h1>
      <p>It can be convenient in certain circumstances to make conditionals dependent on what is in props. Look at how this example sentence was created: {this.props.name==="Ted" ? "Welcome Ted!": "Hey, youre not Ted!"}</p>
      <p>Now look at how this example sentence was created: {this.props.name==="Ted" && <p>Heres the secret code</p>} {this.props.name!=="Ted" && <p>You dont get to see the secret code!</p>}</p>
      </div>
    )
  }
}

export default ConditionalsandProps;
