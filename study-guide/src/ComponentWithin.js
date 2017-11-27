import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RegularJavascript from './regularJavascript';

class ComponentWithin extends Component{
  render(){
    const stuff ={
      name: 'Oliver',
      species: 'Cat',
      age: 2.5,
      activities: ['napping,', ' eating,', ' and destroying the apartment']
    }
    return(
      <div>
      <h1>
      Components Within Components
      </h1>
      <p>
      Here is my content from ComponentWithin. As you can see, it is basically the same as referencing a component in general. I need the import and export statements and I need to make sure that the class is capitalized. It shows up on the main page because the main page references the component that references this component.
      </p>
      <h1>Objects of Variables</h1>
      <p>
       Now I will use this new component for a new task: creating and using an object of variables to reference. Just like my variables I used in my last component, they will be in between the render and the return above.
      </p>
      <p>
      Now here is a paragraph created by using the variables I stored: My pets name is {stuff.name}. He is a {stuff.species}. He is {stuff.age} years old. He enjoys {stuff.activities}.
      </p>
      <p>
      Ok, Im done with this so now I will create a new component to put directly under the RegularJavascript component in App. It will go below all this because all this stuff is referenced by App either directly or by a component that App references. Go back to App to see what loads on the page after this.
      </p>
      </div>
    )
  }

}
export default ComponentWithin;
