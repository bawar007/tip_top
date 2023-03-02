import {
  GoogleMap,
  InfoWindowF,
  LoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
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

  const [info, setinfo] = useState(true);

  const handleClickMarker = () => {
    setinfo(true);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDeVwoOw-20wXKQ9dkqN3aPhGShjYKPADQ">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={windowW ? containerStyle : containerMobile}
        center={center}
        zoom={17}
        options={{
          zoomControl: false,
          streetViewControl: false,
        }}
      >
        <MarkerF
          position={{
            lat: 52.99440455242884,
            lng: 20.276690939912914,
          }}
          animation={1}
          onClick={handleClickMarker}
        >
          {info && (
            <InfoWindowF
              position={{
                lat: 52.99440455242884,
                lng: 20.276690939912914,
              }}
              onCloseClick={() => setinfo(false)}
            >
              <div className="infoBoxMap">
                <h4>TIP - TOP, glazura i wykończenia wnętrz</h4>
                <div className="infoBoxMapContent">
                  <p>Kowalewko 48, 06-445 Strzegowo</p>
                  <a
                    href="https://goo.gl/maps/mR8iFw2kxzmN5Ldr8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wyznacz trasę
                  </a>
                </div>
              </div>
            </InfoWindowF>
          )}
        </MarkerF>
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;
