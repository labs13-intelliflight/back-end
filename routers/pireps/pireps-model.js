const db = require("../../database/dbConfig");

module.exports = {
  getPireps,
  clear,
  update,
  findById
};

function getPireps() {
  return db("pireps");
}

function clear(id, clear) {
  return db("pireps")
    .where({ id })
    .update(clear)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
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

  function findById(id){
      return db("pireps").where("pireps.id", id)
  }
