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
      console.log(this.props)
    }


  handleMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.shelter,
      activeMarker: marker,
      showingInfoWindow: true
    })
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
          url:"https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/49/dog-face_1f436.png"
        }} onClick={this.handleMarkerClick}/>)
      })

      const style = {
        width: '100%',
        height: '80%'
      }
      return (
        <Map
              google={this.props.google}
              initialCenter={{
                lat: this.props.latitude,
                lng: this.props.longitude
              }}
              style={style}
              zoom={15}
              onClick={this.handleMapClick}
            >
            {mappedMarkers}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h4>{this.state.selectedPlace.name.$t}</h4>
                  <a href="#">Show me the pups!</a>
                </div>
            </InfoWindow>
        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: (mapKey)
})(MapContainer)
