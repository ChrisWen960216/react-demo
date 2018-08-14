import React, { Component } from 'react';


export default class DebounceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputValue = this.inputValue.bind(this);
  }

  inputValue(e) {
    const { target: { value } } = e;
    const { onValueChange } = this.props;
    return onValueChange(value);
  }


  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.inputValue} />
      </div>
    );
  }
}
