const database = require('./database-connection')

module.exports = {
   listAll() {
      return database('national_parks')
   }
}