exports.seed = function(knex, Promise) {
  return knex('join-users-parks').del()
    .then(function () {
      return knex('join-users-parks').insert([
        {user_id: 40, park_id: '41'},
        {user_id: 40, park_id: '44'},
        {user_id: 40, park_id: '47'},
        {user_id: 41, park_id: '42'},
        {user_id: 41, park_id: '45'},
        {user_id: 41, park_id: '49'}
      ]);
    });
};
