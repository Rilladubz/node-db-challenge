exports.seed = function(knex) {
  return knex("Project_Resources").insert([
    { project_Id: 1, Resource_Id: 1 },
    { project_Id: 1, Resource_Id: 2 },
    { project_Id: 1, Resource_Id: 3 },
    { project_Id: 1, Resource_Id: 4 },
    { project_Id: 2, Resource_Id: 1 },
    { project_Id: 2, Resource_Id: 2 },
    { project_Id: 2, Resource_Id: 3 },
    { project_Id: 2, Resource_Id: 4 }
  ]);
};
