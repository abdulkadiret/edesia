exports.up = function(knex, Promise) {
  return knex.schema.createTable("deliveries", table => {
    table.increment("storeId");
    table.string("address");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("deliveries");
};
