//imports express into server.js
const express = require('express')
//sets a const variable app to the express function
const app = express()
//sets the const variable port to a specific port number
const port = process.env.PORT || 5000
//sets the path for use of app to be through /client/public
app.use(express.static('./client/public'))

//Listens the port specified above in const port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

//Displays JSON object in restaurants.json file.
app.get('/api', (req, res) => {
  res.sendFile(__dirname + '/api/restaurants.json')
})

//Displays JSON object in restaurants.json file.
app.get('/api/restaurant', (req, res) => {
  res.sendFile(__dirname + '/api/restaurants.json')
})

//Displays JSON object in restaurants.json file.
app.get('/api/restaurant-id', (req, res) => {
  res.sendFile(__dirname + '/api/restaurant-id.json')
})

//Displays JSON information on specific restaurant with the ID specified
app.get('/api/restaurant-id/:id', (req, res) => {
  res.sendFile(__dirname + '/api' + `/${req.params.id}.json`)
})

//Custom error for page not found
app.get('*', (req, res) => {
  res.send('The page you are looking for does not exist.')
})
