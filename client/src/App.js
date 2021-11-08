// this is the front end landing page

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.js'
import Mojos from './components/Mojos.js'
import Homestyle from './components/Homestyle.js'
import Javas from './components/Javas.js'
import Downtowng from './components/Downtowng.js'
import Sams from './components/Sams.js'
import Darcys from './components/Darcys.js'
import Killarney from './components/Killarney.js'
import Toms from './components/Toms.js'

function App () {
  //This makes the paths needed for our restaurants
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Path shows the path for the page and element refers to the component */}
          <Route path='/' element={<Home />} />
          <Route path='/mojos' element={<Mojos />} />
          <Route path='/homestyle' element={<Homestyle />} />
          <Route path='/javas' element={<Javas />} />
          <Route path='/downtowng' element={<Downtowng />} />
          <Route path='/sams' element={<Sams />} />
          <Route path='/darcys' element={<Darcys />} />
          <Route path='/killarney' element={<Killarney />} />
          <Route path='/toms' element={<Toms />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
