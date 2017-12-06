import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import { mapKey } from '../keys/keys.js'



export class MapContainer extends Component {

  state = {
    selectedPlace: {name: "Woof"},
    activeMarker: null,
    showingInfoWindow: false
  }


    componentWillMount() {
    }


  handleMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.shelter,
      activeMarker: marker,
      showingInfoWindow: true
    })
    this.props.setSelectedShelter(props.shelter)
  }


  handleMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


    render() {

      const mappedMarkers = this.props.shelters[0].shelter.map((s, idx) => {
        return(<Marker key={idx} shelter={s} title={s.name.$t} name={s.name.$t} position={{lat: s.latitude.$t, lng: s.longitude.$t}} icon={{
          url:"https://i.imgur.com/0C25FVX.png?1"
        }} onClick={this.handleMarkerClick}/>)
      })

      const containerStyle= {
        width: '70%',
        height: '100%',
        position: 'fixed'
      }

      const style = {
        width: '100%',
        height: '100%'
      }
      return (
        <Map
              google={this.props.google}
              initialCenter={{
                lat: this.props.latitude,
                lng: this.props.longitude
              }}
              containerStyle={containerStyle}
              style={style}
              zoom={14}
              onClick={this.handleMapClick}
              className="size-fix"
            >
            {mappedMarkers}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h4>{this.state.selectedPlace.name.$t}</h4>
                </div>
            </InfoWindow>
        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: (mapKey)
})(MapContainer)
