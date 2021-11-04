//imports express into server.js
const express = require('express')
//sets a const variable app to the express function
const app = express()
//sets the const variable port to a specific port number
const port = process.env.PORT || 5000
app.use(express.static('./client/public'))
app.use(express.urlencoded({ extended: true }))

///get request specifies
app.get('/api', (req, res) => {
  //sends the file to display JSON object on restaurants.json file.
  res.sendFile(__dirname + '/api/restaurants.json')
})

//*****working on this */ When the user visits the the route /api/restaurant-id (substituting restaurant-id for an actual restaurant's ID) user sees, in json format, info of the restaurant whose id was @ end of url

//custom error for page not found
app.get('*', (req, res) => {
  res.send('The page you are looking for does not exist.')
})

//listens for requests/puts (crud) on the port specified in const port
app.listen(port, () => console.log(`Listening on port ${port}!`))
