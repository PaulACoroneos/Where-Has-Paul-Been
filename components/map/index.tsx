import * as React from "react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "80vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
};

const options = {
  minZoom: 3,
  maxZoom: 18,
}

//center is dallas!
const center = {
  lat: 32.7767,
  lng: -96.797,
};

const Map: React.FC = ({ children }) => (
  <LoadScriptNext
    id="script-loader"
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
  >
    <GoogleMap center={center} zoom={2} mapContainerStyle={containerStyle} options={options}>
      {children}
    </GoogleMap>
  </LoadScriptNext>
);

export default Map;
