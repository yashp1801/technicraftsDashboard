import { useState, useEffect } from "react";
import "./MapView.css";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  RectangleF,
  PolygonF,
} from "@react-google-maps/api";
import MapViewPopUp from "./MapViewPopUp";
import Loader from "../../scenes/global/Loader";

const center = { lat: 20.5937, lng: 78.9629 };

const latnLng = [
  {
    id: 3,
    lat: 14.076,
    lng: 71.8777,
  },
  {
    id: 4,
    lat: 10.076,
    lng: 71.8777,
  },
  {
    id: 5,
    lat: 15.076,
    lng: 72.9777,
  },
  {
    id: 6,
    lat: 19.076,
    lng: 79.9777,
  },
];
const maharashtraCoords = [
  { lat:  21.4314, lng:  73.3910 },
  { lat: 21.4314, lng: 80.8388 },
  { lat: 15.6035, lng: 73.3910 },
  { lat: 15.6035, lng: 80.8388 },
 
];

const MapView = () => {
  const [sitePosition, setSitePosition] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };

    fetch("http://envicrafts.com:8080/sites", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setSitePosition(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(sitePosition);

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
        {/* <PolygonF paths={maharashtraCoords} /> */}
        {sitePosition.map((item) => {
          return (
            <MarkerF
              key={item.id}
              position={{
                lat: parseInt(item.latitude),
                lng: parseInt(item.longitude),
              }}
              onClick={() => openPopUp(item.id)}
            />
          );
        })}
      </GoogleMap>
      {isOpen && (
        <MapViewPopUp selectedMarker={selectedMarker} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default MapView;
