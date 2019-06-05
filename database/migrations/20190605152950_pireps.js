exports.up = function(knex, Promise) {
  return knex.schema.createTable("pireps", tbl => {
    tbl.increments();

    tbl.string("state").notNullable();

    tbl.integer("weather");

    tbl.text("description", 1000);

    tbl.integer("latitude");

    tbl.integer("longitude");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pireps");
};
