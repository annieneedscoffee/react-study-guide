import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component{
  render(){
    const footy = {
      color: 'white',
      background: 'black',
      fontSize: 50
    }
    return(
      <div style={footy}>
        ***The End***
      </div>
    )
  }
}
export default Footer;
