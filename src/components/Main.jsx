import React, { Component } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { modal } = this.props;
    return (
      <div>
        {modal ? <Modal visible>{modal}</Modal> : null}
      </div>
    );
  }
}

Main.propTypes = {
  modal: PropTypes.node,
};

Main.defaultProps = {
  modal: null,
};

function mapStateToProps(state) {
  return { ...state.modal };
}

export default connect(mapStateToProps)(Main);
