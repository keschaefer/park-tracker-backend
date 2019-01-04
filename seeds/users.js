exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          first_name: "Kate",
          last_name: "Schaefer",
          email: "keschaefer@email.com",
          password: "123password"
        },
        {
          first_name: "Ben",
          last_name: "Brinckerhoff",
          email: "bbrinck@email.com",
          password: "123password"
        },
        {
          first_name: "Beef",
          last_name: "Mitch",
          email: "beef@email.com",
          password: "123password"
        },
        {
          first_name: "Julia",
          last_name: "Zigarelli",
          email: "julia@email.com",
          password: "123password"
        },
        {
          first_name: "Sarah",
          last_name: "Schaefer",
          email: "sarah@gmail.com",
          password: "123password"
        }
      ]);
    });
};
