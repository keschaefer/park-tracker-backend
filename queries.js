const database = require('./database-connection')

module.exports = {
   listAll() {
      return database('national_parks')
   },
   listAllUsers() {
      return database('users')
   },
   listUserParks(user_id) {
      return database('join-users-parks').where('user_id', user_id)
   },
   listSingleUser(email) {
      return database('users').where({email: email})
   },
   createUser(newUser) {
      return database('users').insert(newUser).returning('*')
   }
}