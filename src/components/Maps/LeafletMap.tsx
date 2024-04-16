import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const orderLocations = [
  { id: 1, lat: 51.505, lng: -0.09, title: 'Order 1' },
  { id: 2, lat: 51.515, lng: -0.1, title: 'Order 2' },
  // Add more orders as needed
];

const LeafletMap = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
        <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">Track Deliveries</h4>
        
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {orderLocations.map((order) => (
            <Marker key={order.id} position={[order.lat, order.lng]}>
            <Popup>{order.title}</Popup>
            </Marker>
        ))}
        </MapContainer>
    </div>
  );
};

export default LeafletMap;
