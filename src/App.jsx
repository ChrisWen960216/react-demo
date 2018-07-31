import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './App.css';

const duration = 5000;

const defaultStyle = {
  transition: `${duration}ms`,
  width: '600px',
};

const transitionStyle = {
  true: { width: '600px' },
  false: { width: '100px' },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.testBox = React.createRef();
    this.changeState = this.changeState.bind(this);
    this.printValue = this.printValue.bind(this);
  }


  componentDidUpdate(prevProps, prevState, snapShot) {
    const width = this.testBox.current.clientWidth;
    const { active } = this.state;
    console.log(width, snapShot, active);
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    const width = this.testBox.current.clientWidth;
    return { width, prevState: prevState.active };
  }

  printValue(node) {
    console.log(node.clientWidth);
  }

  changeState() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    return (
      <Transition
        timeout={duration}
        in={active}
        onEntered={this.printValue}
        onExited={this.printValue}
      >
        {state => (
          <div
            ref={this.testBox}
            className="text"
            style={{ ...defaultStyle, ...transitionStyle[active] }}
            onClick={this.changeState}
            role="presentation"
          >
            {state}
          </div>
        )}

      </Transition>
    );
  }
}

export default App;
