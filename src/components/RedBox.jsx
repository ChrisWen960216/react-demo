import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { showModal, hideModal } from '../redux/main/action';

class RedBox extends Component {
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
    return this.props.showModal(<h1 role="presentation" onClick={this.hideModal}>RedBox</h1>);
  }

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '20px' }}>
        <Button type="default" onClick={this.showModal}>弹框</Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: component => dispatch(showModal(component)),
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(null, mapDispatchToProps)(RedBox);
