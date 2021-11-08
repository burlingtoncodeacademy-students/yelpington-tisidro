//bring in the necessary methods from react-leaflet, Leaflet, react-router-dom
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Link } from 'react-router-dom'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

//making the marker icon--yellow to match homepage button!
let DefaultIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: iconShadow
})
let toms = [43.40109, -72.71575]

function SmMapToms (props) {
  return (
    <div>
      <MapContainer
        center={[43.40109, -72.71575]}
        zoom={13}
        style={{ height: '250px', width: '250px' }}
      >
        {/* adding the tilelayer, with attribution */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {/* Marker positions for restaurants and popups with nav links to individual pages on markers.  */}

        <Marker position={toms} icon={DefaultIcon}>
          <Popup>Tom's Tavern</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default SmMapToms
