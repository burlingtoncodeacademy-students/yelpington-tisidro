//Import necessary files and components
import { useState, useEffect } from 'react'
import SmMapDowntowng from './SmMapDowntowng.js'
import '../styles/Rest.css'
import NavButtons from './NavButtons.js'
import Hangry from './Hangry.js'

//Function to pull in restaurant data from the api for this restaurant. Export is done here also.
export default function Downtowng () {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [hours, setHours] = useState('')
  const [notes, setNotes] = useState('')
  //Fetch request in useEffect() fetches Json as a response then sets the data for the items
  useEffect(() => {
    fetch('/api/restaurant-id/downtowng')
      //this .then() takes body of response and turns it to json using .json()
      .then(res => res.json())
      //this .then() takes the data from json file and pulls out the values for each key
      .then(data => {
        console.log(data)
        setName(data.name)
        setAddress(data.address)
        setPhone(data.phone)
        setHours(data.hours)
        setNotes(data.notes)
      })
  }, [])
  //Return structures the appearance of the page using html tags and pulls in the data values for the keys listed in {}
  return (
    <>
      <div id='rest-wrapper'>
        <div id='title'>
          <h1>Feeling hangry? Why not check out...</h1>
        </div>
        {/* NavButton component displays navigation buttons with links to pages */}
        <div>
          <NavButtons />
        </div>
        {/* Container holding main content. this content is pulled in using the data values like {name} set in the second .then() in the fetch above. */}
        <div id='main-content'>
          <div id='rest-info'>
            <h2>{name}</h2>
            <ul>
              <li>Address: {address}</li>
              <li>Phone: {phone}</li>
              <li>Hours: {hours}</li>
              <li>Notes: {notes}</li>
            </ul>
          </div>
          <div id='map-image'>
            {/* Code displaying the individual restaurant map component (smaller scale) */}
            <SmMapDowntowng />
            <Hangry />
          </div>
        </div>
      </div>
    </>
  )
}
