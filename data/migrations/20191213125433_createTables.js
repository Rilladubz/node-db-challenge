exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.string("description");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
    })
    .createTable("tasks", tbl => {
      tbl.increments().primary("id");

      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl
        .boolean("completed")
        .defaultTo(false)
        .notNullable();
      tbl
        .integer("project_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.string("description");
    })
    .createTable("Project_Resources", tbl => {
      tbl.increments();
      tbl
        .integer("project_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("Resource_Id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("Project_Resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
