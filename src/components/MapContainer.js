import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import { mapKey } from '../keys/keys.js'



export class MapContainer extends Component {


    render() {
      return (
        <Map
              google={this.props.google}
              initialCenter={{
                lat: 40.685339,
                lng: -73.979361
              }}
              zoom={15}
              onClick={this.onMapClicked}
            />
      );
    }
}

export default GoogleApiWrapper({
  apiKey: (mapKey)
})(MapContainer)
