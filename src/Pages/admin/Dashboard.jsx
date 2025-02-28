import { LayersControl, MapContainer,Marker,Popup ,TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css"

function Dashboard() {
  return (
    <div>
      <MapContainer 
      className="h-[100vh]"
      center={[13, 100]} zoom={7} scrollWheelZoom={false}>
        <LayersControl>
          <LayersControl.BaseLayer>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </LayersControl.BaseLayer> 
        </LayersControl>
        <Marker position={[13, 100]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Dashboard;
