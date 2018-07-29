import React, { Component } from 'react';
import * as Data from './data.json'

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      query:"",
      results:[],
    }
  }

  handleClick(item){
    var markTitle=item.innerText;
    var markers=this.props.markers;
    var element=markers.filter((marker)=>(marker.title===markTitle));
    this.props.openInfoWindow(element[0]);
  }

  updateQuery(query){
    this.props.closeInfoWindow();

    this.setState({
      query:query
    });
    var filteredPlaces=[];
    var places=Data.places;

    places.forEach(function(location) {
      if (location.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
        filteredPlaces.push(location);
      }
  );

  this.setState({
    results:filteredPlaces
  });

this.props.updateMarkers(filteredPlaces);
  }

  render() {
    return (
      <div>
      {this.props.open ?(

        <nav className="side-nav-open">
        <h3>Filter Locations</h3>
        <div>
        <input type="text" placeholder="station location" onChange={(event)=>this.updateQuery(event.target.value)}/>
        <ul>
          {this.state.query==="" ?(
            Data.places.map((place)=>(<li key={place.name} onClick={(event)=>this.handleClick(event.target)}>{place.name}</li>))
          ):(
            this.state.results.map((place)=>(<li key={place.name} onClick={(event)=>this.handleClick(event.target)}>{place.name}</li>))

          )
          }
        </ul>
        </div>
        </nav>
      ):(
        <nav className="side-nav-close">
        <h3>Filter Locations</h3>
        <div>
        <button type="button" name="button" className="butn">Filter</button>
        <ul>
          {
          Data.places.map((place)=>(<li key={place.name}>{place.name}</li>))
          }
        </ul>
        </div>
        </nav>

      )}
      </div>
    );
  }
}

export default Menu;
