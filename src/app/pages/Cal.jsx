import React, { PureComponent } from 'react';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        type: 'string',
        details: {
          value: 0,
        },
      },
      name: 0,
    };
    this.renderCount = 0;
    this.addResult = this.addResult.bind(this);
    this.addName = this.addName.bind(this);
  }

  addName() {
    let { name } = this.state;
    name += 1;
    this.setState({
      name,
    });
  }

  addResult() {
    const { result } = this.state;
    result.details.value += 1;
    this.setState({
      result,
    });
  }

  render() {
    this.renderCount += 1;
    const { result: { details: { value } }, name: nameValue } = this.state;
    // const { value } = result.details;
    return (
      <div>
        <h1>
          渲染次数:
          {' '}
          {this.renderCount}
        </h1>
        <h3>
          结果:
          {value}
        </h3>
        <h3>
          名字:
          {nameValue}
        </h3>
        <button type="button" onClick={this.addResult}>
          加一
        </button>
        <button type="button" onClick={this.addName}>
          加名字
        </button>
      </div>
    );
  }
}
