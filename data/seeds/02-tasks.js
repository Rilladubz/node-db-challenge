exports.seed = function(knex) {
  return knex("tasks").insert([
    { description: "new new new", notes: "some notes", project_Id: 1 },
    { description: "new new new 3", notes: "some notes 3", project_Id: 1 },
    { description: "new new new 4", notes: "some notes 4", project_Id: 2 },
    { description: "new new new 5", notes: "some notes 5", project_Id: 3 },
    { description: "new new new 6", notes: "some notes 6", project_Id: 1 },
    { description: "new new new 7", notes: "some notes 7", project_Id: 3 }
  ]);
};
