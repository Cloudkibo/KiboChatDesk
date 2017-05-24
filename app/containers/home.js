import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from './KiboChat/main';
import Login from './Login/DemoComp';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Main />
    );
  }

}

function mapStateToProps(state) {
  //console.log(state);
  return {
    connectInfo: (state.connectInfo)
  };
}

function mapDispatchToProps(dispatch) {
  // todo do this later
  return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
