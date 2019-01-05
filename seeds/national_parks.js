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
          image: 'https://dl.dropboxusercontent.com/s/a1andh4o2nezvko/Carlsbad.jpg'
        },
        {
          name: 'Acadia National Park',
          description: 'Acadia National Park is a 47,000-acre Atlantic coast recreation area primarily on Maine\'s Mount Desert Island. Its landscape is marked by woodland, rocky beaches and glacier-scoured granite peaks such as Cadillac Mountain, the highest point on the United States’ East Coast. Among the wildlife are moose, bear, whales and seabirds. The bayside town of Bar Harbor, with restaurants and shops, is a popular gateway.',
          state: 'Maine',
          image: 'https://dl.dropboxusercontent.com/s/saphvcvap6n49mj/acadia.jpg'
        },
        {
          name: 'Glacier National Park',
          description: 'Glacier National Park is a 1,583-sq.-mi. wilderness area in Montana\'s Rocky Mountains, with glacier-carved peaks and valleys running to the Canadian border. It\'s crossed by the mountainous Going-to-the-Sun Road. Among more than 700 miles of hiking trails, it has a route to photogenic Hidden Lake. Other activities include backpacking, cycling and camping. Diverse wildlife ranges from mountain goats to grizzly bears.',
          state: 'Montana',
          image: 'https://dl.dropboxusercontent.com/s/jpkqufsvqlokbgn/Glacier.jpg'
        },
        {
          name: 'Grand Canyon National Park',
          description: 'Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset.',
          state: 'Arizona',
          image: 'https://dl.dropboxusercontent.com/s/n16xpv5lc2f3cz6/GrandCanyon.jpg'
        },
        {
          name: 'Mount Rainier National Park',
          description: 'Mount Rainier National Park, a 369-sq.-mile Washington state reserve southeast of Seattle, surrounds glacier-capped, 14,410-ft. Mount Rainier. Atop 6,400-ft.-high Sunrise, the highest point in the park reachable by car, visitors can admire Rainier and other nearby volcanoes, including Mount Adams. The park’s 5,400-ft.-high Paradise overlook offers mountain views, summertime wildflower meadows and hiking trailheads.',
          state: 'Washington',
          image: 'https://dl.dropboxusercontent.com/s/y0inciezux2762k/MountRainier.jpg'
        },
        {
          name: 'Dry Tortugas National Park',
          description: 'Dry Tortugas National Park is in the Gulf of Mexico, west of Key West, Florida. It comprises 7 islands, plus protected coral reefs. Garden Key is home to beaches and the 19th-century Fort Jefferson. Loggerhead Key has a lighthouse and sea turtles. On nearby Loggerhead Reef, the Windjammer Wreck, the remains of an 1875 ship, is a popular dive site. Bush Key is a nesting site for seabirds like sooty terns.',
          state: 'Florida',
          image: 'https://dl.dropboxusercontent.com/s/4v5xbdi6hedb09w/DryTorgugas.jpg'
        },
        {
          name: 'Shenandoah National Park',
          description: 'Shenandoah National Park extends along the Blue Ridge Mountains in the U.S. state of Virginia. The Skyline Drive runs its length, and a vast network of trails includes a section of the long-distance Appalachian Trail. Mostly forested, the park features wetlands, waterfalls and rocky peaks like Hawksbill and Old Rag mountains. Shenandoah is home to many bird species, plus deer, squirrels and the elusive black bear.',
          state: 'Virginia',
          image: 'https://dl.dropboxusercontent.com/s/agzx7dp5qtsu1al/Shenendoah.jpg'
        },
        {
          name: 'Big Bend National Park',
          description: 'Big Bend National Park is in southwest Texas and includes the entire Chisos mountain range and a large swath of the Chihuahuan Desert. The Ross Maxwell Scenic Drive leads to the ruins of Sam Nail Ranch, now home to desert wildlife. The Santa Elena Canyon, carved by the Rio Grande, features steep limestone cliffs. Langford Hot Springs, near the Mexican border, has pictographs and the foundations of an old bathhouse.',
          state: 'Texas',
          image: 'https://dl.dropboxusercontent.com/s/q5t7r6h2ulttob8/BigBend.jpg'
        }
      ]);
    });
};
