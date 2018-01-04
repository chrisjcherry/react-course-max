import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chris', age: 31 },
      { name: 'Jane', age: 27 },
      { name: 'Cindy', age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 31 },
        { name: 'Jane', age: 27 },
        { name: 'Cindy', age: 22 }
      ]
      });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Chris', age: 31 },
        { name: event.target.value, age: 27 },
        { name: 'Cindy', age: 21 }
      ]
      });
  }

  togglePeronsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      textAlign: 'center',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Chris!')}
            changed={this.nameChangedHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button
            style ={style}
            onClick = { this.togglePeronsHandler }>Toggle show people</button>
          { persons }
      </div>
    );
    // equivalent to...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
