import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="side-nav">
        <h3>Bart Location</h3>
        <div>
        <input type="text" placeholder="station location"/>
        <button type="button" name="button" className="butn">Filter</button>
        </div>
        </nav>
        <div className="main">
        <header className="header">
          <i className="fas fa-bars"></i>
          <h1>Neighborhood Map</h1>
        </header>
        <div className="map-section">
        </div>
        </div>
      </div>
    );
  }
}

export default App;
