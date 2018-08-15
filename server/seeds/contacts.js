exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex("contacts")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("contacts").insert([{ name: "Maj" , phone: "073....."}, { name: "Nasir", phone: "074...." }]);
        });
};
