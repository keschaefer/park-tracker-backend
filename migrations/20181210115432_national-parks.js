
exports.up = function(knex, Promise) {
   return knex.schema.createTable('national_parks', (park) => {
      park.increments('id')
      park.string('name')
      park.string('description', [500])
      park.string('state')
      park.string('image')
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('national_parks')
};
