import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import DevDashboard from './components/DevDashboard';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/dev/dashboard" component={DevDashboard} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
