import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Greg', age: 40 },
      { name: 'Kate', age: 25 }
    ]
  }

  switchNameHandler = (newName) => {
    // not allowed: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Greg', age: 40 },
        { name: 'Kate', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a new react app</h1>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')}>Doing some other stuff</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
