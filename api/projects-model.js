const db = require("../db-config");

module.exports = {
  find,
  add
};

function find() {
  return db("projects");
}

function add(body) {
  return db("projects").insert(body);
}
