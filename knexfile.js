module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/parktracker'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
