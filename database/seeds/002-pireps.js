exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pireps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pireps").insert([
        {
          id: 1,
          state: "Alabama",
          latitude: 32.806671,
          longitude: -86.79113,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 2,
          state: "Alaska",
          latitude: 61.370716,
          longitude: -152.404419,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 3,
          state: "Arizona",
          latitude: 33.729759,
          longitude: -111.431221,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 4,
          state: "Arkansas",
          latitude: 34.969704,
          longitude: -92.373123,
          weather: 7,
          description: "weather and stuff"
        },
        {
          id: 5,
          state: "California",
          latitude: 36.116203,
          longitude: -119.681564,
          weather: 7
        },
        {
          id: 6,
          state: "Colorado",
          latitude: 39.059811,
          longitude: -105.311104,
          weather: 7
        },
        {
          id: 7,
          state: "Connecticut",
          latitude: 41.597782,
          longitude: -72.755371,
          weather: 7
        },
        {
          id: 8,
          state: "Delaware",
          latitude: 39.318523,
          longitude: -75.507141,
          weather: 7
        },
        {
          id: 9,
          state: "Florida",
          latitude: 27.766279,
          longitude: -81.686783,
          weather: 7
        },
        {
          id: 10,
          state: "Georgia",
          latitude: 33.040619,
          longitude: -83.643074,
          weather: 7
        },
        {
          id: 11,
          state: "Hawaii",
          latitude: 21.094318,
          longitude: -157.498337,
          weather: 7
        },
        {
          id: 12,
          state: "Idaho",
          latitude: 44.240459,
          longitude: -114.478828,
          weather: 7,
          description: "weather and stuff"
        },
        {
          id: 13,
          state: "Illinois",
          latitude: 40.349457,
          longitude: -88.986137,
          weather: 7,
          description: "weather and stuff"
        },
        {
          id: 14,
          state: "Indiana",
          latitude: 39.849426,
          longitude: -86.258278,
          weather: 4,
          description: "weather and stuff"
        },
        {
          id: 15,
          state: "Iowa",
          latitude: 42.011539,
          longitude: -93.210526,
          weather: 3,
          description: "weather and stuff"
        },
        {
          id: 16,
          state: "Kansas",
          latitude: 38.5266,
          longitude: -96.726486,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 17,
          state: "Kentucky",
          latitude: 37.66814,
          longitude: -84.670067,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 18,
          state: "Louisiana",
          latitude: 31.169546,
          longitude: -91.867805,
          weather: 8,
          description: "weather and stuff"
        },
        {
          id: 19,
          state: "Maine",
          latitude: 44.693947,
          longitude: -69.381927,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 20,
          state: "Maryland",
          latitude: 39.063946,
          longitude: -76.802101,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 21,
          state: "Massachusetts",
          latitude: 42.230171,
          longitude: -71.530106,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 22,
          state: "Michigan",
          latitude: 43.326618,
          longitude: -84.536095,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 23,
          state: "Minnesota",
          latitude: 45.694454,
          longitude: -93.900192,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 24,
          state: "Mississippi",
          latitude: 32.741646,
          longitude: -89.678696,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 25,
          state: "Missouri",
          latitude: 38.456085,
          longitude: -92.288368,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 26,
          state: "Montana",
          latitude: 46.921925,
          longitude: -110.454353,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 27,
          state: "Nebraska",
          latitude: 41.12537,
          longitude: -98.268082,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 28,
          state: "Nevada",
          latitude: 38.313515,
          longitude: -117.055374,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 29,
          state: "New Hampshire",
          latitude: 43.452492,
          longitude: -71.563896,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 30,
          state: "New Jersey",
          latitude: 40.298904,
          longitude: -74.521011,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 31,
          state: "New Mexico",
          latitude: 34.840515,
          longitude: -106.248482,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 32,
          state: "New York",
          latitude: 42.165726,
          longitude: -74.948051,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 33,
          state: "North Carolina",
          latitude: 35.630066,
          longitude: -79.806419,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 34,
          state: "North Dakota",
          latitude: 47.528912,
          longitude: -99.784012,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 35,
          state: "Ohio",
          latitude: 40.388783,
          longitude: -82.764915,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 36,
          state: "Oklahoma",
          latitude: 35.565342,
          longitude: -96.928917,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 37,
          state: "Oregon",
          latitude: 44.572021,
          longitude: -122.070938,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 38,
          state: "Pennsylvania",
          latitude: 40.590752,
          longitude: -77.209755,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 39,
          state: "Rhode Island",
          latitude: 41.680893,
          longitude: -71.51178,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 40,
          state: "South Carolina",
          latitude: 33.856892,
          longitude: -80.945007,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 41,
          state: "South Dakota",
          latitude: 44.299782,
          longitude: -99.438828,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 42,
          state: "Tennessee",
          latitude: 35.747845,
          longitude: -86.692345,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 43,
          state: "Texas",
          latitude: 31.054487,
          longitude: -97.563461,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 44,
          state: "Utah",
          latitude: 40.150032,
          longitude: -111.862434,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 45,
          state: "Vermont",
          latitude: 44.045876,
          longitude: -72.710686,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 46,
          state: "Virginia",
          latitude: 37.769337,
          longitude: -78.169968,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 47,
          state: "Washington",
          latitude: 47.400902,
          longitude: -121.490494,
          weather: 1
        },
        {
          id: 48,
          state: "West Virginia",
          latitude: 38.491226,
          longitude: -80.954453,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 49,
          state: "Wisconsin",
          latitude: 44.268543,
          longitude: -89.616508,
          weather: 1,
          description: "weather and stuff"
        },
        {
          id: 50,
          state: "Wyoming",
          latitude: 42.755966,
          longitude: -107.30249,
          weather: 1,
          description: "weather and stuff"
        }
      ]);
    });
};
