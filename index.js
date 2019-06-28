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