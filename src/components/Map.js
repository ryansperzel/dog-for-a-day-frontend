import React, { Component } from 'react'
import {GoogleApiWrapper} from 'google-maps-react'

export default class Map extends Component {

}

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
