
exports.up = function(knex, Promise) {
    return knex.schema.createTable("stores", table => {
        table.increments("storeId");
        table.string("address");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("stores");
};
