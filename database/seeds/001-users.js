exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    // .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, email: "test1@gmail.com", paid: false },
        { id: 2, email: "test2@gmail.com", paid: false },
        { id: 3, email: "test3@gmail.com", paid: false }
      ]);
    });
};
