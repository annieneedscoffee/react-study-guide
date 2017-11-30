import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class OldForm extends Component{

  render(){
    function MyName(){
      alert('To save this info you would just connect it to a database.')
    }
    return(
      <div>
        <h1>Old Fashioned Forms</h1>
        <p>If you want to do an old fashioned form like one would do using HTML and Javascript that works too.</p>
        <form>
        First Name: <input type="text"></input>
        <button onClick={MyName}>Submit</button>
        </form>
      </div>
    )
  }
}
export default OldForm;
