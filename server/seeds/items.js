exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('items').del()
        .then(function () {
            // Inserts seed entries
            return knex("items").insert([
              { quantity: 200, type: "meat" },
                { quantity: 300, type: "vegitables" }
            ]);
        });
};
