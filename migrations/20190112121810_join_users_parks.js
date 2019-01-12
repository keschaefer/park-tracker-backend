
exports.up = function(knex, Promise) {
   return knex.schema.createTable('join-users-parks', (item) => {
     item.integer('user_id')
     item.integer('park_id') 
   });
}

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('join-users-parks')
};
