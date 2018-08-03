import React, { Component } from 'react';
import ImmutableCalculator from './pages/ImmutableCal';
import Calculator from './pages/Cal';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ImmutableCalculator />
        <Calculator />
      </div>
    );
  }
}
