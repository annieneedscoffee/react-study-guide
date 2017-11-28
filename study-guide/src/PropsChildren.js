import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Parent from './Parent'

class PropsChildren extends Component{
  render(){
    return(
      <div>
      <h1>Props and Children</h1>
      <p>Here is the content from my PropsChildren component.</p>
      <Parent myTitle="Awesome Cats">
        <li>Gucci</li>
        <li>Treasure</li>
        <li>Jasper</li>
        <li>Precious</li>
        <li>Oliver</li>
        <li>Mgee</li>
      </Parent>
      <Parent myTitle="Steps to Understand This">
        <li>Look at the PropsChildren component</li>
        <li>Look at the Parent component</li>
        <li>The skeleton of the titles and lists is defined in Parent.</li>
        <li>The content that fills in the skeleton is in PropsChildren.</li>
        <li>You only need the one skeleton and you can reuse it as many times as you want.</li>
        <li>I create variables in Parent and link them to props coming in from the Child.</li>
        <li>I create the skeleton this way because then I can use it every time I have more props coming in from the Child.</li>
      </Parent>
      </div>
    )
  }
}

export default PropsChildren;
