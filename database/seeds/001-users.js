exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "rowValue1", paid: false },
        { id: 2, username: "rowValue2", paid: false },
        { id: 3, username: "rowValue3", paid: false }
      ]);
    });
};
