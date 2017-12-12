import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Chris', age: 31 },
      { name: 'Jane', age: 27 },
      { name: 'Cindy', age: 21 }
    ]
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

  render() {
    const style = {
      backgrounColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button 
            style ={style}
            onClick = { () => this.switchNameHandler('Christopher') }>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Myhobbies: Running</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Chris!')}
            changed={this.nameChangedHandler} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // equivalent to...
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
