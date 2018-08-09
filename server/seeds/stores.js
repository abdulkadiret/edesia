
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        { address: "Marhall"},
        { address: "Springburn"},
      ]);
    });
};
