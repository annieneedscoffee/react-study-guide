import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DefaultProps from './DefaultProps';

class DefaultPropsParent extends Component{
  render(){
    return(
      <div>
        <p>{this.props.paragraph}</p>
      </div>
    )
  }
}
DefaultPropsParent.defaultProps = {paragraph: "I'm the default paragraph!"};

export default DefaultPropsParent;
