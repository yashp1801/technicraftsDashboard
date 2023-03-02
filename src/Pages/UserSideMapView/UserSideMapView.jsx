import { useState, useEffect } from "react";
import "../MapView/MapView.css";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  RectangleF,
  PolygonF,
} from "@react-google-maps/api";
import MapViewPopUp from "../MapView/MapViewPopUp";
import Loader from "../../scenes/global/Loader";

const center = { lat: 20.5937, lng: 78.9629 };

const data = [
  {
    id: 1,
    lat: 19.033,
    lng: 73.0297,
  },
];

const MapView = () => {
  const [sitePosition, setSitePosition] = useState([]);

  //   useEffect(() => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
  //     };

  //     fetch("http://envicrafts.com:8080/sites", {
  //       method: "GET",
  //       headers: headers,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setSitePosition(data))
  //       .catch((error) => console.error(error));
  //   }, []);

  //   console.log(sitePosition);

  const [selectedMarker, setSelectedMarker] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = (id) => {
    setSelectedMarker(id);
    setIsOpen(true);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCjjs-zUXlRnvmGi4AbCxABHIqfydG0fow",
  });
  if (!isLoaded) return <Loader />;

  return (
    <div className="mapview">
      <GoogleMap
        center={center}
        zoom={6}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <div>hey this is map</div>
        {data.map((item) => {
          return (
            <MarkerF
              key={item.id}
              position={{
                lat: item.lat,
                lng: item.lng,
              }}
              onClick={() => openPopUp(item.id)}
            />
          );
        })}
        ;
      </GoogleMap>
      {isOpen && (
        <MapViewPopUp selectedMarker={selectedMarker} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default MapView;
