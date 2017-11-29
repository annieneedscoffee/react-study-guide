import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyDesign from './ExtraStyle';

class MyStyle extends Component{
  render(){
    const design = {
      color: 'white',
      background: 'blue'
    }
    return(
      <div>
        <h1>Styling in React</h1>
        <h3>Separate CSS Files</h3>
        <p>You can style JSX in a separate css file the same way you would HTML as long as you remember to import it. For an example of that see the standard <code>App.css</code> file that is always there when you create a new react app.</p>
        <h3>Inline Styling</h3>
        <p>This section is on inline styling in React and how it is a bit different.</p>
        <p style={{color: 'red'}}>Check the code in the MyStyle component to see why this sentence is red.</p>
        <p style={{background: 'cyan'}}>And why this background is cyan.</p>
        <span style={{background: 'pink', color: 'purple'}}>And why this is pink and purple</span>
        <p style={design}>
        Check me out! I was styled using an object. Nifty!
        </p>
        <p style={{color: 'pink', fontSize: 45}}>Notice how my font size and its value are written.</p>
        <h3>Importing from Another Component</h3>
        <p style={MyDesign}>Im written in the MyStyle component but my green color comes from ExtraStyle.</p>
      </div>
    )
  }
}

export default MyStyle;
