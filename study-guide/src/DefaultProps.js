import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DefaultPropsParent from './DefaultPropsParent';

class DefaultProps extends Component{
  render(){
    return(
      <div>
      <h1>Default Props</h1>
      <p>Here is the content from my DefaultProps component. Look at DefaultProps and DefaultPropsParent and compare the two paragraphs below to see the difference.</p>
      <DefaultPropsParent />
      <DefaultPropsParent paragraph="I'm not the default paragraph!" />
      </div>
    )
  }
}

export default DefaultProps;
