import { Link } from 'react-router-dom'
import '../styles/Rest.css'

// Function to display navigation buttons with links, export default in front of the function serves to export this to other components
export default function NavButtons (props) {
  return (
    <>
      <div id='nav-buttons'>
        <button id='blueBtn'>
          <Link to='/'>Home</Link>
        </button>
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
    </>
  )
}
