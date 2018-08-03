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
    };
    this.renderCount = 0;
    this.resetResult = this.resetResult.bind(this);
  }

  resetResult() {
    const { result } = this.state;
    result.details.value = 1;
    this.setState({
      result,
    });
  }

  render() {
    this.renderCount += 1;
    const { result: { details: { value } } } = this.state;
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
        <button type="button" onClick={this.resetResult}>
          重置
        </button>
      </div>
    );
  }
}
