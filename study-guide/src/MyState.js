import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyState extends Component{
  state = {
    year:2017,
    month:11,
    date:1,
    day:"Tuesday",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t0Ny75AppPyTKCqdUFS0fQO-6bm9T8REJcaIdPK0Ixp9L-t5"
  }

  flip = () => {
  this.setState({date:this.state.date+1})
}

  toggleCats = () => {
    const otherCat = this.state.photo ==  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t0Ny75AppPyTKCqdUFS0fQO-6bm9T8REJcaIdPK0Ixp9L-t5" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZYv95L-aFBpeRQRg88XCSonaJh5G82n8lGP2O_comjsS1yKM" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1t0Ny75AppPyTKCqdUFS0fQO-6bm9T8REJcaIdPK0Ixp9L-t5"
    this.setState({photo: otherCat})
  }

  render(){

    return(
      <div>
      <h1>State</h1>
      <p>Here is the content from my MyState component. State is different from props because its not passed in from another component. </p>
      <p>Look at the code in state. Its just a big object that contains whatever we want. I can use it to write something like: Today is {this.state.day}, {this.state.month}-{this.state.date}-{this.state.year}.</p>
      <p>I can also change the state by using <code>this.setState</code></p>
      <button onClick={this.flip}>Flip Calendar</button>
      <p>This code in the button works because of how state and flip are set up above. If you dont put this code, including the word this, then it wont work. <code>setState</code> is outside of the render part because setting state renders. If it was in here it would cause an endless loop.</p>
      <p>That was a lot. I think I need a cat picture break. Click the photo to toggle pictures.</p>
      <img src={this.state.photo}  onClick={this.toggleCats}/>
      </div>
    )
  }
}

export default MyState;
