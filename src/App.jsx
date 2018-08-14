import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import DebounceInput from './components/Input';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.changeValue = this.changeValue.bind(this);
    this.printValue = debounce(this.printValue.bind(this), 1000);
  }

  changeValue(value) {
    this.setState({
      value,
    }, this.printValue);
  }

  printValue() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DebounceInput onValueChange={this.changeValue} value={this.state.value} />
      </div>
    );
  }
}

export default App;
