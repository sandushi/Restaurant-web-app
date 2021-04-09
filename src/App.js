
import MenuNavigation from './components/menu/MenuNavigation';
import React, { Component } from 'react';
import Home from './components/home/Home';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <MenuNavigation />
      </div>
    );
  }
}

export default App;
