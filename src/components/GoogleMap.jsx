'use client'
import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

// https://www.google.fr/maps/place/Cabinet+Infirmier+Civiale/@48.8728737,2.3753148,17z/data=!4m6!3m5!1s0x47e66d4c85cd7c17:0xc2f677bafb58d0b9!8m2!3d48.8728737!4d2.3753148!16s%2Fg%2F11y83lwr41?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 48.8728737,
      lng: 2.3753148,
    },
    zoom: 11,
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
