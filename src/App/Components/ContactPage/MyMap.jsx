import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const containerMobile = {
  width: "80%",
  height: "400px",
  margin: "auto",
};

const center = {
  lat: 52.994974111638015,
  lng: 20.276628259163807,
};

const MyMap = () => {
  const { windowW } = useContext(AppContext);
  return (
    <LoadScript googleMapsApiKey="AIzaSyDeVwoOw-20wXKQ9dkqN3aPhGShjYKPADQ">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={windowW ? containerStyle : containerMobile}
        center={center}
        zoom={17}
        options={{
          zoomControl: false,
        }}
      >
        <MarkerF
          position={{
            lat: 52.99440455242884,
            lng: 20.276690939912914,
          }}
          animation={1}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
