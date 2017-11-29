import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegularJavascript from './regularJavascript';
import Pictures from './Pictures';
import Events from './Events';
import Conditionals from './Conditionals';
import Arrays from './Arrays';
import ThisStuff from './ThisStuff';
import SomeProps from './SomeProps';
import ConditionalsandProps from './ConditionalsandProps';
import FunctionsandProps from './FunctionsandProps';
import PropsChildren from './PropsChildren';
import DefaultProps from './DefaultProps';
import MyState from './MyState';
import MyStyle from './MyStyle';
import Footer from './Footer';
import MorePandS from './MorePandS';
import LifeCycle from './LifeCycle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Study Guide</h1>
        </header>
        <h1>How the Study Guide Works</h1>
        <p className="App-intro">
          This study guide works by referencing the code that makes it show up on the page. For example, look at the code that makes the file name here: <code>src/App.js</code> show up as text on the monitor instead of the computer trying to execute it as code.
        </p>
        <p>
          And look at the code that changes the <strong>emphasis</strong> just below that in <cod>src/App.js</cod>.
        </p>
        <p>
          Now compare the code that displays 5 here...
        </p>
        <p>
          to the code that displays {2+3} here. It works because the curly brackets tell the computer to read it as javascript.
        </p>
        <h1>
          Accessing Components in Other Files
        </h1>
        <p>
          It's not good to have too much in the main page so look just below this line in <code>src/App.js</code> to see the reference to the component I'm referencing from another file, and then look at that file.
        </p>
        <RegularJavascript />
        <Pictures />
        <Events />
        <Conditionals />
        <Arrays />
        <ThisStuff />
        <SomeProps prophere="Im a prop!" name="Tina"/>
        <ConditionalsandProps name="Fred"/>
        <FunctionsandProps />
        <PropsChildren />
        <DefaultProps />
        <MyState />
        <MorePandS />
        <MyStyle />
        <LifeCycle />
        <Footer />
      </div>
    );
  }
}

export default App;
