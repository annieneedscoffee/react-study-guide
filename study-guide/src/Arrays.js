import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class Arrays extends Component{
  render(){
    const cats = ['Oliver', 'Jasper', 'Gucci', 'Treasure', 'Mgee', 'Precious'];
    const catList = cats.map(cat => <li>{cat}</li>);
    return(
      <div>
      <h1>Using .map and Arrays</h1>
      <p>Here is the content from my Arrays component.</p>
      <ul>{catList}</ul>
      <p>This works because the curly brackets allow you to inject regular javascript stored in the variables above.</p>
      <h3>Using Keys in Lists</h3>
      <p>Keys will help if you need to keep list items in order or if you need to remember something about list items like if they have been checked. Heres an example: </p>
      </div>
    )
  }
}
export default Arrays;
