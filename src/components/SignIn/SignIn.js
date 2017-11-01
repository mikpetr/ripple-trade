import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './SignIn.css';
import logo from '../../logo.svg';

class SignIn extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <div className="inputs-group">
          <TextField hintText="Type your name" />
          <Link to="/home">
            <RaisedButton className="join-button" label="Join" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;