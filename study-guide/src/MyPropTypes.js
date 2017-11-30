import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PassSomeProps from './PassSomeProps';

class MyPropTypes extends Component{
  render(){
    return(
      <div>
      <h1>Prop Types</h1>
      <p>Props can be given types to make sure they are in a certain format such as string or number etc. They can also be made to be required so that an error will be thrown if they are not supplied. Look at the code in MyPropTypes and PassSomeProps components to see how the stuff below is rendered.</p>
      <h2>Book List</h2>
      <ol>
      <PassSomeProps title="The Dictionary"
      synopsis="This book contains the definitions of words, plus their pronunciation and spelling"
      numPages={1001}
      bestPages={['page 1, ', 'page 27, ', 'page 53, ', 'page 580 ']}
      />
      <PassSomeProps title="The Big Recipe Book"
      synopsis="This is a big book about recipes, not a book about big recipes."
      numPages={500}
      bestPages={['page 8, ', 'page 100']}
      />
      <PassSomeProps title="Super Awesome Book"
      />
      </ol>
      <p>Super Awesome Book does not cause an error even though it is missing numPages and bestPages because only title is required. Title and synopsis know to expect a string. numpages knows to expect a number, and bestPages knows to expect an array. For this to work you need to install prop types and you need the line at the top of the PassSomeProps component to import prop types.</p>
      </div>
    )
  }
}
export default MyPropTypes;
