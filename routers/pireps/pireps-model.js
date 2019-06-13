const db = require("../../database/dbConfig");

module.exports = {
  getPireps,
  add,
  update,
  findById,
  remove
};

function getPireps() {
  return db("pireps");
}

async function add(pirep) {
  const [id] = await db("pireps").insert(pirep, "id");

  return findById(id);
}

function update(id, changes) {
  return db("pireps")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function findById(id) {
  return db("pireps").where({ id });
}

function remove(id) {
  return db("pireps")
    .where({ id })
    .del();
}
