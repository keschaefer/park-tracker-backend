const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries.js')
const bcrypt = require('bcrypt');
const saltRounds = 12;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.post('/createuser', (req, res, next) => {
   const userNewPassword = bcrypt.hashSync(req.body.password, saltRounds);
   const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email:  req.body.email,
      password: userNewPassword,
    }
   queries.createUser(newUser)
   .then(user => {res.send(user[0])})
   .catch(next)
})

app.post('/signin', (req, res, next) => {
   queries.listSingleUser(req.body.email).then(user => {
      if(user.length < 1) {
         res.status(404).send({message: {error:"This user doesn't exist"}})
      } else {
         return bcrypt.compare(req.body.password, user[0].password)
         .then(isGood => {
            if (isGood) {
               res.send(user)
            } else {
               res.status(400).send({message: {error: "Incorrect password"}})
            }
         })
      }
   })
   .catch(next)
})

app.get('/', (req, res) => {
   queries.listAll().then(parks => {res.send(parks)})
})

app.get('/users', (req, res) => {
   queries.listAllUsers().then(parks => {res.send(parks)})
})

app.get('/userparks/:id', (req, res, next) => {
   console.log(req.params.id)
   queries.listUserParks(req.params.id).then(parks => {res.send(parks)})
   .catch(next)
})

app.use((req, res) => {
   res.status(404).json({error: {message: 'data not found'}})
})

app.use((err, req, res, next) => {
   console.log("ERROR", err)
   const status = err.status || 500
   res.status(status).json({ error: err.message })
  })

const listener = () => `Listening on port ${port}`

app.listen(port, listener)


