import React, { Component } from 'react';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchList } from '../../actions/LandingPage'


class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
      this.props.fetchList();
  }

  render() {
      console.log('success', this.props.isSuccess)
    return (
      <div>
        Content will be here
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSuccess: state.landingReducer
  }
}

const mapDispatchToProps = (dispatch) => {
return bindActionCreators({ fetchList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage);