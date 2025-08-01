import React, { Component } from 'react';
import CurrencyConverter from './components/CurrencyConverter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  sayWelcome = (message) => {
    console.log(message);
  };

  handlePress = () => {
    console.log('I was clicked');
  };

  render() {
    return (
      <div>
        <h1>Event Examples</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>
        <button onClick={this.handlePress}>Synthetic Event</button>
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;