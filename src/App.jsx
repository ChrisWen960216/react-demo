import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import Main from './components/Main';
import RedBox from './components/RedBox';
import { showModal, hideModal } from './redux/main/action';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    return this.props.hideModal();
  }

  showModal() {
    return this.props.showModal(<h1 onClick={this.hideModal} role="presentation">Hello world</h1>);
  }

  render() {
    return (
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <Main />
        <Button type="primary" onClick={this.showModal}>
          弹框
        </Button>
        <RedBox />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.modal };
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: component => dispatch(showModal(component)),
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
