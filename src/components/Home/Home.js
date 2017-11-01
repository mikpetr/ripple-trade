import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import './Home.css';

class Home extends Component {

  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    return (
      <div className="Home">
        This is home page
      </div>
    );
  }
}

export default Home;