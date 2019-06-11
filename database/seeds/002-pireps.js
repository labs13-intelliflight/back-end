exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pireps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("pireps").insert([
        {
          id: 1,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 32.806671,
          longitude: -86.79113,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 2,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 61.370716,
          longitude: -152.404419,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 3,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 33.729759,
          longitude: -111.431221,
          weather: 2,
          description: "weather and stuff"
        },
        {
          id: 4,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 34.969704,
          longitude: -92.373123,
          weather: 7,
          description: "weather and stuff"
        },
        {
          id: 5,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 36.116203,
          longitude: -119.681564,
          weather: 7
        },
        {
          id: 6,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 39.059811,
          longitude: -105.311104,
          weather: 7
        },
        {
          id: 7,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 41.597782,
          longitude: -72.755371,
          weather: 7
        },
        {
          id: 8,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 39.318523,
          longitude: -75.507141,
          weather: 7
        },
        {
          id: 9,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 27.766279,
          longitude: -81.686783,
          weather: 7
        },
        {
          id: 10,
          altitude: 130,
          turbulence: "moderate",
          icing: "light",
          latitude: 33.040619,
          longitude: -83.643074,
          weather: 7
        },
      ]);
    });
};
