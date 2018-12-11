exports.seed = function(knex, Promise) {
  return knex('national_parks').del()
    .then(function () {
      return knex('national_parks').insert([
        {
          name: 'Rocky Mountain National Park',
          description: 'Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!',
          state: 'Colorado',
          image: 'https://dl.dropboxusercontent.com/s/g2ybqhw742ueyjs/Rocky%20Mountain.jpg'
        },
        {
          name: 'Arches National Park',
          description: 'Visit Arches to discover a landscape of contrasting colors, land forms and textures unlike any other in the world. The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.',
          state: 'Utah',
          image: 'https://dl.dropboxusercontent.com/s/elfox0s6d0jpqtt/Arches.jpg'
        },
        {
          name: 'Carlsbad Caverns National Park',
          description: 'High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.',
          state: 'New Mexico',
          image: 'https://dl.dropboxcontent.com/s/xq2ucm1k4rsf5cr/Carlsbad%20Caverns.jpg',
        }
      ]);
    });
};
