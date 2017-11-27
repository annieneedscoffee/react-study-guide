import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

class Pictures extends Component{
  render(){
  const  pics = {
      cat1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrEcwI0tFFTACRs-kenYCORHXlK7mQ4xyoiU11bBpsNQJMzO9uQ",
      cat2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInA-rYeZ3EQIPgWMri7YZknrYaFtHiFNDIV8I-vp-PHwPF_8I"
    }
    return(
      <div>
      <h1>Images Stored in Components</h1>
      <h3>Pictures of Funny Cats</h3>
      <p>In the Pictures Component I have stored some image urls the same way I stored info in variables in an object when I created that paragraph about my cat.</p>
      <img src={pics.cat1} />
      <img src={pics.cat2} />
      </div>
    )
  }
}
export default Pictures;
