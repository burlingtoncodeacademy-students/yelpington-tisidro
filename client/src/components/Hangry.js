import React from 'react'
import Hangry1 from '../images/Hangry1.jpg' // Tell webpack this JS file uses this image

function Hangry () {
  // Import result is the URL of your image
  return (
    <img
      src={Hangry1}
      alt='Hungry and angry woman cartoon'
      width='200'
      height='200'
    />
  )
}

export default Hangry
