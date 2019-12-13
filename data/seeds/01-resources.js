exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "1", description: "Tfvvsdfdft" },
    { name: "2", description: "dfsvfdfon" },
    { name: "3", description: "svvdfsdf" },
    { name: "Giberish", description: "kuaydgkucygsduy" }
  ]);
};
