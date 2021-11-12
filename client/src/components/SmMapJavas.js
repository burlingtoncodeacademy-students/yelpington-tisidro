//bring in the necessary methods from react-leaflet, Leaflet, react-router-dom
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

//making the marker icon--orange to match homepage button!
let DefaultIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: iconShadow
})

let java = [43.41272, -72.70097]

function SmMapJava (props) {
  return (
    <div>
      <MapContainer
        center={[43.41272, -72.70097]}
        zoom={13}
        style={{ height: '300px', width: '300px' }}
      >
        {/* adding the tilelayer, with attribution */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {/* Marker positions for restaurants and popups with nav links to individual pages on markers.  */}

        <Marker position={java} icon={DefaultIcon}>
          {' '}
          <Popup>Java Baba</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default SmMapJava
