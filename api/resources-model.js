const db = require("../db-config");

module.exports = {
  find,
  add
};

function find() {
  return db("resources");
}

function add(body) {
  return db("resources").insert(body);
}
