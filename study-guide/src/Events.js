import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class Events extends Component{
  render(){
    function clickFunc(){
      alert('Woo Hoo! My click function works!');
    }
    return(
      <div>
      <h1>Event Listeners</h1>
      <p>Now we are getting info from the Events Component</p>
      <p onClick={clickFunc}>Click Here</p>
      <p>Now look at the code in Events to see how that worked. In render but before return theres the code to make it work. Then it is referenced in the paragraph tag.</p>
      </div>
    )

  }
}
export default Events;
