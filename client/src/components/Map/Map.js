import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 55.86211, lng: -4.24998 }}>
      <Marker position={{ lat: 55.8505, lng: -4.28775 }} />
    </GoogleMap>
  ))
);

export default Map;
