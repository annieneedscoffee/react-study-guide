import React, {Component} from 'react';
import ReactDom from 'react-dom';

class MyForms extends Component{
  state = {
    entry1: '',
    entry2: ''
  }
  MyInput = (e) => {
    this.setState({entry1: e.target.value})
  }

  render(){
    return(
      <div>
      <h1>React Forms</h1>
      <p>Type something in the box.</p>
      <input type="text" onChange={this.MyInput} value={this.state.entry1}/>
      <p>{this.state.entry1}</p>
      <p>How cool! It doesnt take much code either. You need state, the function to make it change, and then references to both of those in your input field, and a reference to that part of state where you would like it to appear. This automatically changes state without the need for a submit button. If you want to create a form with a submit button like you would without react, that works too.</p>
      </div>
    )
  }
}
export default MyForms;
