exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "World Domination", description: "Take over at all cost" },
    { name: "Random Task", description: "Random explanation" },
    { name: "What ever", description: "W.e" },
    { name: "Giberish", description: "kuaydgkucygsduy" }
  ]);
};
