import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div>
      {this.props.open ?(

        <nav className="side-nav-open">
        <h3>Bart Location</h3>
        <div>
        <input type="text" placeholder="station location"/>
        <button type="button" name="button" className="butn">Filter</button>
        </div>
        </nav>
      ):(
        <nav className="side-nav-close">
        <h3>Bart Location</h3>
        <div>
        <input type="text" placeholder="station location"/>
        <button type="button" name="button" className="butn">Filter</button>
        </div>
        </nav>

      )}
      </div>
    );
  }
}

export default Menu;
