exports.up = knex => knex.schema.table("users", table => {
    table.text("type_user").defaultTo("sale");
});

exports.down = knex => knex.schema.table("users", table => {
    table.dropColumn("type_user");
});