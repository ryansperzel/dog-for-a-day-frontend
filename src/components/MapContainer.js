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

      // const mappedMarkers = this.props.shelters[0].shelter.map((s, idx) => {
      //   return(<Marker key={idx} shelter={s} title={s.name.$t} name={s.name.$t} position={{lat: s.latitude.$t, lng: s.longitude.$t}} icon={{
      //     url:"https://i.imgur.com/0C25FVX.png?1"
      //   }} onClick={this.handleMarkerClick}/>)
      // })

      // shelter={s}

      let unleashed = {
        id: {
          $t: "NY1270"
        },
        name: {
          $t: "Unleashed"
        }
      }

      let pup = {
        id: {
          $t: "NY93"
        },
        name: {
          $t: "Pup Rescue NYC"
        }
      }

      let patrol = {
        id: {
          $t: "NY1184"
        },
        name: {
          $t: "Pup Patrol"
        }
      }

      let waggytail = {
        id: {
          $t: "NY17"
        },
        name: {
          $t: "Waggytail Rescue"
        }
      }

      let whiskers = {
        id: {
          $t: "NY800"
        },
        name: {
          $t: "Whiskers Cat Club"
        }
      }

      const mappedMarkers = [<Marker key={1}  title="Unleashed" name="Unleashed" position={{lat: 40.715771, lng: -73.987709}} icon={{url:"https://i.imgur.com/0C25FVX.png?1"}}
        onClick={this.handleMarkerClick} shelter={unleashed}/>, <Marker key={2}  title="Pup Rescue NYC" name="Pup Rescue NYC" position={{lat: 40.718746, lng: -73.983129}} icon={{url:"https://i.imgur.com/0C25FVX.png?1"}}
          onClick={this.handleMarkerClick} shelter={pup}/>, <Marker key={3}  title="Pup Patrol" name="Pup Patrol" position={{lat: 40.725091, lng: -74.001035}} icon={{url:"https://i.imgur.com/0C25FVX.png?1"}}
            onClick={this.handleMarkerClick} shelter={patrol}/>, <Marker key={4}  title="Waggytail Rescue" name="Waggytail Rescue" position={{lat: 40.705451, lng: -74.014419}} icon={{url:"https://i.imgur.com/0C25FVX.png?1"}}
              onClick={this.handleMarkerClick} shelter={waggytail}/>, <Marker key={4}  title="Whiskers Cat Club" name="Whiskers Cat Club" position={{lat: 40.720067, lng: -74.002197}} icon={{url:"https://i.imgur.com/0C25FVX.png?1"}}
                onClick={this.handleMarkerClick} shelter={whiskers}/>]

      const containerStyle= {
        width: '77%',
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
