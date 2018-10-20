const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
const saveUser = (name, email, password, city, postcode, role) => {
  return knex("users")
    .insert({ name, email, password, city, postcode, role })
    .returning("*");
};
const getSingleUser = (email, password) => {
  return knex("users")
    .where({ email, password })
    .first();
};
const getUserProfile = userId => {
  return knex("users")
    .select("user_id", "email", "name", "postcode", "city")
    .where({ user_id: userId })
    .first();
};

const addDrivers = (name, email, city, postcode, role, password) => {
  var data = { name, email, city, postcode, role, password };
  console.log(data);
  return knex("users")
    .insert({ name, email, city, postcode, role, password })
    .returning("*");
};
const getDeliveries = () => {
  return knex.select().from("deliveries");
};
const addDeliveries = (address, deadline, status, store_name,latitude,longitude) => {
  return knex("deliveries")
    .insert({ address, deadline, status, store_name,  latitude, longitude })
    .returning("*");
};

const filterDeliveryById = deliveryId => {
  return knex("deliveries")
    .select()
    .where({ delivery_id: deliveryId })
    .first();
};

const filterDeliveriesByDriverId = driverId => {
  return knex("deliveries")
    .select()
    .where({ driver_id: driverId });
};

const getStores = () => {
  return knex.select().from("stores");
};
const getStoresContacts = () => {
  return knex.select().from("stores_contacts");
};

const getContacts = () => {
  return knex.select().from("contacts");
};

const editUserProfile = (user_id, data) => {
  return knex
    .table("users")
    .where("user_id", "=", user_id)
    .update({
      name: data.name,
      email: data.email,
      city: data.city,
      postcode: data.postcode,
      password: data.password
    });
};
const assignDriverIdToDelivery = (delivery_id, user_id) => {
  return knex
    .table("deliveries")
    .where("delivery_id", "=", delivery_id)
    .update({
      driver_id: user_id
    });
};

const editDeliveryDetails = (delivery_id, data) => {
  return knex
    .table("deliveries")
    .where("delivery_id", "=", delivery_id)
    .update({
      address: data.address,
      store_name: data.store_name,
      deadline: data.deadline,
      status: data.status
    });
};
const editDriverAdmin = (user_id, data) => {
  return knex
    .table("users")
    .where("user_id", "=", user_id)
    .update({
      name: data.name,
      email: data.email,
      city: data.city,
      postcode: data.postcode,
      role: data.role
    });
};
const filterDriverById = userId => {
  return knex("users")
    .select()
    .where({ user_id: userId })
    .first();
};
const deleteDelivery = async delivery_id => {
  return await knex
    .table("deliveries")
    .where({ delivery_id })
    .del();
};

module.exports = {
  getUsers,
  getDeliveries,
  assignDriverIdToDelivery,
  getStores,
  getStoresContacts,
  getContacts,
  editUserProfile,
  editDeliveryDetails,
  getSingleUser,
  getUserProfile,
  saveUser,
  filterDeliveryById,
  addDeliveries,
  deleteDelivery,
  editDriverAdmin,
  filterDriverById,
  addDrivers,
  filterDeliveriesByDriverId
};
