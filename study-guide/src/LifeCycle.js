import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LifeCycle extends Component{
/* componentWillMount(){
    alert('Im from the LifeCycle component where it calls component will mount.')
  } */



/* componentDidMount(){
alert('Component did mount. Woo hoo! Thats good because if you were connecting to an API you would probably need to use this.')
} */


  render(){
    return(
      <div>
      <h1>LifeCycle</h1>
      <p>Look at the code in the LifeCycle component. See the commented out code above? It says something about the lifecycle. Try uncommenting it and see what happens. You will find this useful if you want to connect to an API or if you want to use setTimeOut.</p>
      <br/>
      <br/>
      <br/>
      </div>
    )
  }
}
export default LifeCycle;
