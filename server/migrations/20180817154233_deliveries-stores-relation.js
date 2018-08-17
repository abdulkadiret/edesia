
exports.up = function(knex, Promise) {
    await knex.schema.createTable('stores', table => {
        table.increment('store_id')
        table.string("area");
        table.string("city");
        table.string("address")
    })
    await knex.schema.alterTable('deliveries', table => {
        table.integer('store_id')
        table.foreign('store_id').references('store_id').inTable('stores')
    })
}

