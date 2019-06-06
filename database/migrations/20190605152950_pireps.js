exports.up = function(knex, Promise) {
  return knex.schema.createTable("pireps", tbl => {
    tbl.increments();

    tbl.string("state").notNullable().unique();

    tbl.integer("weather").notNullable();

    tbl.text("description", 1000);

    tbl.integer("latitude").notNullable();

    tbl.integer("longitude").notNullable();

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("pireps");
};
