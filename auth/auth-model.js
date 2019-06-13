const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    addUser,
    findUserById
}

function getUsers() {
    return db('users')
}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return findUserById(id)
        })
}

function findUserById(id) {
    return db('users')
        .where({ id })
        .first();
}