import React, { Component } from 'react';
import './App.css';
import Menu from './menu.js'

class App extends Component {
  state={
    isOpen:true,
  }

  handleClick=()=> {
	this.setState({
		isOpen: !this.state.isOpen
	});
}

// <i className="fas fa-bars" onClick={this.handleClick} ></i>
  render() {
    return (
      <div className="App">
        <Menu open={this.state.isOpen} />
        <div className="main">
        <header className="header">
          <img src="icon.svg" onClick={this.handleClick} className="bar-icon"/>
          <h1>Neighborhood Map</h1>
        </header>

        </div>
      </div>
    );
  }
}

export default App;
