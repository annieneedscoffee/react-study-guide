import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThisStuff from './ThisStuff';

class SomeProps extends Component{
  render(){
    const readable = JSON.stringify(this.props);
    return(
      <div>
      <h1>Props</h1>
      <p>Here is the content from my SomeProps component. Every component has a props object that contains information about component. You can display that information by using <code>this.props</code>. For example, look at the code that displayed this info: {readable}. We stringify it first so that we can read the object on the monitor. You can put more information into props by giving you component attributes and that is useful for passing information. To do this, put strings into quotes and put other stuff into curly brackets. For example, look at the SomeProps component I called in App. That is where the info returned came from. You can also select just certain parts of the info to display. For example, look at the code for this sentence: Welcome to your home page {this.props.name}!</p>
      </div>
    )
  }
}

export default SomeProps;
