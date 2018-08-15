
exports.up = function(knex, Promise) {
    return knex.schema.createTable("contacts", table => {
      table.increments("contact_id");
      table.string("name");
      table.string("phone");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("contacts");
};

