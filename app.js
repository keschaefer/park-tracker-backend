const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.post('/createuser', (req, res) => {
   queries.createUser(req.body).then(user => {res.send(user[0])})
})

app.get('/', (req, res) => {
   queries.listAll().then(parks => {res.send(parks)})
})

app.get('/users', (req, res) => {
   queries.listAllUsers().then(parks => {res.send(parks)})
})

app.use((req, res) => {
   res.status(404).json({error: {message: 'data not found'}})
})

app.use((err, req, res, next) => {
   const status = err.status || 500
   res.status(status).json({ error: err })
  })

const listener = () => `Listening on port ${port}`

app.listen(port, listener)

module.exports = app
