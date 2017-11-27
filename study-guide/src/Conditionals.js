import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


class Conditionals extends Component{
  render(){
    const numCats = 6;
    return(
      <div>
      <h1>Conditionals in JSX</h1>
      <h3>Conditionals using if statements</h3>
      <p>Here is the content from my Conditionals component. Note that if statements will not work inside of JSX. They must be written outside of the JSX if they are used.</p>
      <h3>Conditionals Without if statements</h3>
      <p>Its easier to use ternary operators instead. Heres an example:</p>
      <p>
      {4>5 ? 'Help, Im trapped in the Upside Down!!!' : '4<5, The world still makes sense!'}
      </p>
      <p>It returned the second statement, which is the equivalent of the else because what we conditioned the first statement on was not true.</p>
      <h3>Conditionals with &&</h3>
      <p>This is best to use if under certain circumstances you want the program to do nothing. Heres an example: </p>
      <ul>
      {  numCats > 1 && <li>You like cats!</li>}
      {  numCats > 2 && <li>You really like cats!</li>}
      {  numCats > 3 && <li>Wow, thats a lot of cats!</li>}
      {  numCats > 6 && <li>Warning, excessive cats!</li>}
      </ul>
      <p>Because the first three conditions are met those statements show up. The final one does not because numCats has been set at 6 and it will only appear if numCats is above 6.</p>
      </div>
    )
  }
}
export default Conditionals;
