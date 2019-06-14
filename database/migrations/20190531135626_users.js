exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl
            .string('email', 128)
            .unique()
            .notNullable();

        tbl.boolean("paid", false)

        tbl.boolean("nightmode", false)


    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};