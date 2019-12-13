const db = require("../db-config");

module.exports = {
  find,
  add
};

function numberToBoolean(int) {
  return int === 0 ? false : true;
}

function find() {
  return db("tasks as t")
    .select(
      "t.id as task_Id",
      "t.description as task_description",
      "t.notes",
      "p.name as project_name",
      "p.description as project_description",
      "t.completed",
      "t.project_Id"
    )
    .join("projects as p", "p.id", "t.project_Id");
  // .where("t.prpoject_Id", );

  // select st.id,
  //     sc.scheme_name,
  //     st.step_number,
  //     st.instructions from schemes as sc
  //     join steps as st on st.scheme_id
  //     = sc.id
  // console.log(id);
  //   return db("schemes as sc")
  //   .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
  //   .join("steps as st", "st.scheme_id", "sc.id")
  //   .where("st.scheme_id", id);
}

function add(body) {
  return db("tasks").insert(body);
}
