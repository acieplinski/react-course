import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a new react app</h1>
        <Person name="Max" age="28" />
        <Person name="Greg" age="40">Doing some other stuff</Person>
        <Person name="Kate" age="25" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
