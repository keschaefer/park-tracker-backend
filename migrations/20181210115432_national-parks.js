
exports.up = function(knex, Promise) {
   return knex.schema.createTable('national-parks', (park) => {
      park.increments('id')
      park.string('name')
      park.string('description')
      park.string('location')
      park.string('image')
   })
};

exports.down = function(knex, Promise) {
  return knex.scheuma.dropTableIfExists('national-parks')
};
