import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import AuthenticationButton from './AuthenticationButton';
import { setAPIStatus, getUserDataFromSession } from '../actions';

/**
 * Development dashboard component is responsible for providing tools for developing.
 */
class DevDashboard extends Component {

  componentWillMount() {
    this.props.getUserDataFromSession();
  }

  render() {
    const { currentUserData } = this.props;
    const appHealthColor = this.props.apiHealth === 200 ? 'green' : 'red';
    const appHealthText = this.props.apiHealth === 200 ? 'okay' : 'failing';
  
    return (
      <div className="container text-left">
        <div className="row">
          <div className="col">
            <h1>Development Dashboard</h1>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3> API Status: {this.props.apiHealth} </h3>
          </div>
          <div className="col">
            <h3 style={{ color: appHealthColor }}> Application Health: {appHealthText} </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button variant="contained" color="secondary" onClick={() => this.props.setAPIStatus(500)}>
              API off
            </Button>
            <Button variant="contained" color="primary" onClick={() => this.props.setAPIStatus(200)}>
              API On
            </Button>
          </div>
        </div>
        < hr />
        <div className="row text-left">
          <div className="col">
            <AuthenticationButton />
          </div>
          <div className="col">
            <img style={{borderRadius:"50%",maxHeight:"180px"}} src={currentUserData.picture}></img>
            <p>ID: {currentUserData._id}</p>
            <p>Name: {currentUserData.lastName}, {currentUserData.firstName}</p>
            <p>Email: {currentUserData.email}</p>
            <p>Interests: {currentUserData.interests}</p>
          </div>
        </div>

      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    apiHealth: state.apiHealth,
    currentUserData: state.currentUserData,
    authenticated: state.authenticated,
  };
}

export default connect(mapStateToProps, { setAPIStatus, getUserDataFromSession })(DevDashboard);