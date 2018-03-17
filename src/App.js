import React, { Component } from 'react';

import Header from './Header.js';
import ResidentList from './ResidentList.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResidentList towerName="A"/>
      </div>
    );
  }
}

export default App;
