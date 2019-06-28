const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// middleware
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// routes
app.get('/', (req, res) => {
  res.json({
    info: 'Node.js, Express, and Postgres API'
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// query routes
const db = require('./queries')
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)