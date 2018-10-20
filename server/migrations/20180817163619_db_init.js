exports.up = async (knex, Promise) => {
  await knex.schema.createTable("roles", table => {
    table.string("role_name").primary();
  });
  await knex.schema.createTable("users", table => {
    table.increments("user_id");
    table.string("name");
    table.string("email").notNullable();
    table.string("city").defaultTo("Glasgow");
    table.string("postcode").notNullable();
    table.string("password").notNullable();
    table.string("role");
    table
      .foreign("role")
      .references("role_name")
      .inTable("roles");
  });
  await knex.schema.createTable("stores", table => {
    table.increments("store_id");
    table.string("area");
    table.string("city");
    table.string("address");
  });

  await knex.schema.createTable("deliveries", table => {
    table.increments("delivery_id");
    table.string("address");
    table.string("latitude");
    table.string("longitude");
    table.integer("driver_id");
    table.string("store_name");
    table.datetime("deadline");
    table.enu("status", ["Available", "Pending", "Delivered", "Cancelled"]);
    table
      .foreign("driver_id")
      .references("user_id")
      .inTable("users");
  });

  await knex.schema.createTable("items", table => {
    table.increments("item_id");
    table.integer("quantity");
    table.string("type");
  });

  await knex.schema.createTable("contacts", table => {
    table.increments("contact_id");
    table.string("name");
    table.string("phone");
  });

  await knex.schema.createTable("status", table => {
    table.string("status");
  });

  await knex.schema.createTable("notifications", table => {
    table.increments("notificationsId");
    table.string("note");
  });

  await knex.schema.createTable("stores_contacts", table => {
    table.integer("store_id");
    table.integer("contact_id");

    table
      .foreign("store_id")
      .references("store_id")
      .inTable("stores");

    table
      .foreign("contact_id")
      .references("contact_id")
      .inTable("contacts");
  });
};

exports.down = async (knex, Promise) => {
  await knex.schema.dropTableIfExists("deliveries");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("stores_contacts");
  await knex.schema.dropTableIfExists("contacts");
  await knex.schema.dropTableIfExists("stores");
  await knex.schema.dropTableIfExists("drivers");
  await knex.schema.dropTableIfExists("items");
  await knex.schema.dropTableIfExists("status");
  await knex.schema.dropTableIfExists("notifications");
  await knex.schema.dropTableIfExists("roles");
};
