exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", table => {
      table.increments("item_id");
      table.integer("quantity");
      table.string("type")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("items");
};

