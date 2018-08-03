import React, { Component } from 'react';
import Immutable from 'immutable';
import * as Cal from '../../utils/calNum';

export default class ImmutableCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fir: Immutable.fromJS({ details: { flag: 'fir', value: 0 } }),
      sec: Immutable.fromJS({ details: { flag: 'sec', value: 0 } }),
      result: Immutable.fromJS({ details: { flag: 'result', value: 0 } }),
    };
    this.renderCount = 0;
    this.calNum = this.calNum.bind(this);
    this.inputNum = this.inputNum.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { fir: $$currentFir, sec: $$currentSec, result: $$currentResult } = this.state;
    const { fir: $$nextFir, sec: $$nextSec, result: $$nextResult } = nextState;
    const valueCondition = Immutable.is($$currentFir, $$nextFir) && Immutable.is($$currentSec, $$nextSec);
    const resultCondition = Immutable.is($$currentResult, $$nextResult);
    const result = !(valueCondition && resultCondition);
    return result;
  }

  setResult(result) {
    const $$result = Immutable.fromJS({ details: { flag: 'result', value: result } });
    this.setState({
      result: $$result,
    });
  }

  getValue(flag) {
    const { state } = this;
    const value = state[flag].getIn(['details', 'value']);
    return value;
  }

  getCurrentState(flag) {
    const { state } = this;
    const $$currentState = state[flag];
    return $$currentState;
  }

  calNum(type) {
    const fir = parseInt(this.getValue('fir'), 10);
    const sec = parseInt(this.getValue('sec'), 10);
    let result = 0;
    switch (type) {
      case '+':
        result = Cal.addTwoNum(fir, sec);
        break;
      case '-':
        result = Cal.subTwoNum(fir, sec);
        break;
      case '*':
        result = Cal.mulTwoNum(fir, sec);
        break;
      case '%':
        result = Cal.divTwoNum(fir, sec);
        break;
      default:
        result = 0;
        break;
    }
    return this.setResult(result);
  }


  inputNum(e, flag) {
    const { value } = e.target;
    const $$currentState = this.getCurrentState(flag);
    const $$nextState = $$currentState.setIn(['details', 'value'], value);
    // console.log($$currentState.getIn(['details', 'value']));
    this.setState({
      [flag]: $$nextState,
    });
  }

  render() {
    const fir = this.getValue('fir');
    const sec = this.getValue('sec');
    const result = this.getValue('result');
    this.renderCount += 1;
    return (
      <div className="immutable-cal">
        <h1>
          Immutable计算器
        </h1>
        <h3>
          渲染计数:
          {' '}
          {this.renderCount}
        </h3>
        <input type="number" value={fir} onChange={e => this.inputNum(e, 'fir')} />
        <input type="number" value={sec} onChange={e => this.inputNum(e, 'sec')} />
        <button type="button" onClick={() => this.calNum('+')}>
          +
        </button>
        <button type="button" onClick={() => this.calNum('-')}>
          -
        </button>
        <button type="button" onClick={() => this.calNum('*')}>
          *
        </button>
        <button type="button" onClick={() => this.calNum('%')}>
          %
        </button>
        结果:
        {' '}
        {result}
      </div>
    );
  }
}
