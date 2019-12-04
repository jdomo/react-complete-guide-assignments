import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName: 'Johnny'
  }

  onChangeHandler = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.userName}/>
        <UserOutput name={"Pooper"}/>
        <UserInput changer={this.onChangeHandler} name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
