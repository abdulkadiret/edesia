exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("deliveries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("deliveries").insert([
        { storeId: 1, address: "Govan" },
        { storeId: 2, address: "Parkhead" }
      ]);
    });
};
