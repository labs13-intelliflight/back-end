exports.up = function(knex, Promise) {
  return knex.schema.createTable("pireps", tbl => {
    tbl.increments();

    tbl.string("altitude").notNullable();

    tbl.string("turbulence")

    tbl.string("icing")

    tbl.integer("weather");

    tbl.text("description", 1000);

    tbl.float("latitude").notNullable();

    tbl.float("longitude").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pireps");
};
