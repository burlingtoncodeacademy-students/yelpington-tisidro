//Import necessary files and components
import Map from './Map.js'
import { Link } from 'react-router-dom'
import '../styles/Rest.css'

export default function Home () {
  return (
    //React fragment- can be used instead of <div>, either will work
    <>
      {/* Main page wrapper div  */}
      <div id='rest-wrapper'>
        {/* page title div */}
        <div id='title'>
          <h1>Feeling Hangry? Yelpington's Got the Eats!</h1>
        </div>
        {/* Location sub title */}
        <h2>Ludlow, Vermont</h2>
        {/* Directions sub title */}
        <h4>Click the map links for a quick view/ buttons for details</h4>
        {/* Did not use Navbuttons component here because the component includes home page link, and this page isn't too cluttered anyway */}
        <div>
          <button id='redBtn'>
            <Link to='/mojos'>Mojos</Link>
          </button>
          <button id='greyBtn'>
            <Link to='/homestyle'>Homestyle</Link>
          </button>
          <button id='orangeBtn'>
            <Link to='/javas'>Javas</Link>
          </button>
          <button id='greenBtn'>
            <Link to='/downtowng'>Downtown</Link>
          </button>
          <button id='purpleBtn'>
            <Link to='/sams'>Sam's</Link>
          </button>
          <button id='yellowBtn'>
            <Link to='/darcys'>Darcy's</Link>
          </button>
          <button id='blueBtn'>
            <Link to='/killarney'>Killarney</Link>
          </button>
          <button id='goldBtn'>
            <Link to='/toms'>Tom's</Link>
          </button>
        </div>
        {/* Importing Map component */}
        <Map />
      </div>
    </> //closing React fragment
  )
}
