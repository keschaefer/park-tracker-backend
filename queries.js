const database = require('./database-connection')

module.exports = {
   listAll() {
      return database('national_parks')
   },
   listAllUsers() {
      return database('users')
   },
   listSingleUser(email) {
      return database('users').where({email: email})
   },
   createUser(newUser) {
      return database('users').insert(newUser).returning('*')
   }
}