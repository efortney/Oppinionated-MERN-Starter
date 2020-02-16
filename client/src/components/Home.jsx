import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDataFromSession } from '../actions'; 

// hompage for so-clone
class HomePage extends Component {

  componentDidMount() {
    this.props.getUserDataFromSession();
  }

  render() {
    return (
      <div>
        <h1>Stack Overflow Clone</h1>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    authenticated: state.currentUserData._id,
  };
}

export default connect(mapStateToProps, { getUserDataFromSession })(HomePage);