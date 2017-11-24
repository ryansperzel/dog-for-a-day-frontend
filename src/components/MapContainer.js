import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import { mapKey } from '../keys/keys.js'

export class MapContainer extends Component {
  render() {
    return (
      <Map
            google={this.props.google}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
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
