import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const API_KEY= process.env.REACT_APP_GOOGLE_MAPS_API_KEY
const AnyReactComponent = ({ text }) => <div>{text}</div>

class BrixMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.7566574,
      lng: -73.972367,
    },
    zoom: 18,
  };
  render () {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'ABC'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.756835}
            lng={-73.972606}
            text='My Marker'
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default BrixMap
