import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'askfuhjf', name: 'Max', age: 28 },
      { id: 'sdfrgasd', name: 'Greg', age: 40 },
      { id: 'ertgiuqw', name: 'Kate', age: 25 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // it does not override whole state, only override showPersons and merge remaining props of state
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)} />);
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a new react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle People
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
  }
}

export default App;
