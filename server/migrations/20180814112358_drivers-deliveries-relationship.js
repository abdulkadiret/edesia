
exports.up = function(knex, Promise) {
    await knex.schema.createTable('drivers', table => {
        table.increment('driver_id')
        table.string('name')
    })
    await knex.schema.alterTable('deliveries', table => {
        table.integer('driver_id')
        table.foreign('driver_id').references('driver_id').inTable('drivers')
    })
};



