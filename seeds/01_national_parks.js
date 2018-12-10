exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('national_parks').del()
    .then(function () {
      // Inserts seed entries
      return knex('national_parks').insert([
        {
          name: 'Rocky Mountain National Park',
          description: 'Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!',
          state: 'Colorado',
          image: 'https://dl.dropboxusercontent.com/s/08zdiffn35zx857/Rocky%20Mountain.jpg'
        }
      ]);
    });
};
