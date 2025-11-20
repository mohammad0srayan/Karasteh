import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const cities = [
    { name: "تهران", lat: 35.6892, lng: 51.3890, info: "دفتر مرکزی" },
    { name: "اصفهان", lat: 32.6525, lng: 51.6675, info: "دفتر اصفهان" },
];

export default function ContactMap() {
    return (
        <MapContainer center={[32, 53]} zoom={5} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {cities.map(city => (
                <Marker key={city.name} position={[city.lat, city.lng]}>
                    <Popup>
                        <strong>{city.name}</strong><br />{city.info}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}