//bring in the necessary methods from react-leaflet, Leaflet, react-router-dom
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Link } from 'react-router-dom'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

//Variables for creating the colored marker icons
let MojoIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: iconShadow
})
let HomestyleIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
  shadowUrl: iconShadow
})
let JavaIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: iconShadow
})
let DowntownIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: iconShadow
})
let SamsIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: iconShadow
})
let DarcysIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: iconShadow
})
let KillarneyIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: iconShadow
})
let TomsIcon = L.icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: iconShadow
})

//Function to display centered map with colored markers and popups with restaurant links
function Map (props) {
  let mojos = [43.39602, -72.69696]
  let homestyle = [43.396, -72.69808]
  let java = [43.41272, -72.70097]
  let downtowng = [43.39552, -72.70102]
  let sams = [43.39478, -72.68093]
  let darcys = [43.39529, -72.69278]
  let killarney = [43.399983, -72.70656]
  let toms = [43.40109, -72.71575]

  return (
    // specifying the position to center the map, the Zoom, and the map dimension
    <div>
      <MapContainer
        center={[43.39688232333494, -72.69134242700515]}
        zoom={13}
        style={{ height: '400px', width: '400px' }}
      >
        {/* adding the tilelayer, with attribution */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {/* Marker positions for restaurants and popups with nav links to individual pages on markers.   */}
        {/* icon= id specifies colored markers that correspond to button colors for better user experience */}
        <Marker position={mojos} icon={MojoIcon}>
          <Popup>
            {/* Popup  message lets users quickly know something about the restaurant */}
            <Link to='/mojos'> Mojo's Cafe</Link>- Southwestern heat!
          </Popup>
        </Marker>

        <Marker position={homestyle} icon={HomestyleIcon}>
          <Popup>
            <Link to='/homestyle'>Homestyle Hostel</Link>-Ecclectic & casual
          </Popup>
        </Marker>

        <Marker position={java} icon={JavaIcon}>
          <Popup>
            <Link to='/java'> Java Baba's</Link>-Mellow Cafe/great sandwiches
          </Popup>
        </Marker>

        <Marker position={downtowng} icon={DowntownIcon}>
          <Popup>
            <Link to='/downtowng'>Downtown Grocery</Link>-Culinary Heaven
          </Popup>
        </Marker>

        <Marker position={sams} icon={SamsIcon}>
          <Popup>
            <Link to='/sams'> Sam's Steakhouse</Link>-Upscale dining
          </Popup>
        </Marker>

        <Marker position={darcys} icon={DarcysIcon}>
          <Popup>
            <Link to='/darcys'>Mr. Darcy's</Link>-Best cocktails
          </Popup>
        </Marker>

        <Marker position={killarney} icon={KillarneyIcon}>
          <Popup>
            <Link to='/killarney'>Killarney's</Link>-Irish pub/best wings
          </Popup>
        </Marker>

        <Marker position={toms} icon={TomsIcon}>
          <Popup>
            <Link to='/toms'>Tom's Loft</Link>-Apres Ski/big portions
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

// Exporting Map so we can use it elsewhere
export default Map
