import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  
  state = {
    inputLength: 0,
    inputArray: [],
  }
  
  onChangeHandler = (e) => {
    const inputLength = e.target.value.length;
    const inputArray = e.target.value.split('');

    this.setState({
      inputLength: inputLength,
      inputArray: inputArray
    });
  }

  onClickHandler = (index) => {
    const inputArray = [...this.state.inputArray];
    inputArray.splice(index, 1);
    this.setState({inputArray: inputArray});
  }

  render() {
    console.log(this.state, '<--state');

    let charArray = null;

    if (this.state.inputArray.length) {
      charArray = this.state.inputArray.map((item, index) => {
          return <CharComponent content={item} click={() => this.onClickHandler(index)}/>
      })
    }

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <h1>Solutions</h1>

        <h2>1.</h2>
        <input type="text" onChange={this.onChangeHandler}></input>
        <p>{this.state.inputLength}</p>

        <h2>2.</h2>
        <ValidationComponent length={this.state.inputLength}/>

        <h2>3.</h2>
        {charArray}
      </div>  
    );
  }
}

export default App;
