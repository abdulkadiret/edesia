exports.seed = async (knex, Promise) => {
  await knex("roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        { role_name: "user" },
        { role_name: "admin" },
        { role_name: "driver" }
      ]);
    });
  await knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "mat",
          email: "mat@gmail.com",
          password: "password1",
          city: "Glasgow",
          postcode: "G3 4EF",
          role: "driver"
        },
        {
          name: "awet",
          email: "awet@yahoo.com",
          password: "password2",
          city: "Glasgow",
          postcode: "G1 5EF",
          role: "admin"
        }
      ]);
    });

  await knex("stores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stores").insert([
        { area: "Marhall", city: "Glasgow", address: "g4 5vb" },
        { area: "Springburn", city: "Glasgow", address: "g20 7ac" }
      ]);
    });

  await knex("deliveries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("deliveries").insert([
        {
          address: "Govan",
          latitude: "55.85050",
          longitude:"-4.28775",
          store_name: "Tesco",
          deadline: new Date("2018-09-01T03:30:00"),
          status: "Available",
          driver_id: 1
        },
        {
          address: "Parkhead",
          latitude: "55.85050",
          longitude: "-4.28775",
          store_name: "Aldi",
          deadline: new Date("2018-08-30T03:30:00"),
          status: "Delivered",
          driver_id: 2
        },
        {
          address: "Parkhead",
          latitude: "55.85050",
          longitude: "-4.28775",
          store_name: "Lidl",
          deadline: new Date("2018-08-30T03:30:00"),
          status: "Pending",
          driver_id: 2
        }
      ]);
    });
  await knex("status")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("status").insert([{ status: "OK" }]);
    });
  await knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        { quantity: 200, type: "meat" },
        { quantity: 300, type: "vegitables" }
      ]);
    });

  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        { name: "Maj", phone: "073....." },
        { name: "Nasir", phone: "074...." }
      ]);
    });
};
