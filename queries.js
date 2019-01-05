const database = require('./database-connection')

module.exports = {
   listAll() {
      return database('national_parks')
   },
   listAllUsers() {
      return database('users')
   },
   createUser(newUser) {
      return database('users').insert(newUser).returning('*')
   }
}