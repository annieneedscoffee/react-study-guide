import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import ComponentWithin from './ComponentWithin'

class RegularJavascript extends Component{
  render(){
    const name = "Charlotte-Anne";
    const adding = 1 + 1 + 1;
    return(
      <div>
        <p>Here is some text from another component being imported to the main page. Note that this only works because the class it is in is capitalized. Also note the import and export on this file and the <code>App.js</code> file.
        </p>
        <p>Now look at how I displayed my name here: {name}. This brings us to our next subject:</p>
        <h1>
        Injecting Regular Javascript Statements into JSX
        </h1>
        <p>
        Here is a nifty math trick: 1 + 1 + 1 = {1 + 1 + 1}. Look at how this line was written out in the <code>regularJavascript.js</code> file.
        </p>
        <p>
        Now look how I wrote this: {adding}. That works because if it is in a constant it is also interpretted as regular javascript.
        </p>
        <p>
        Now look at how I can reference a component within a component:
        </p>
        <ComponentWithin />
      </div>
  )
  }
}

export default RegularJavascript;
