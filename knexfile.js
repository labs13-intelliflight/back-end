require('dotenv').config();

const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./database/intelliflight.db3"
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    // pool: {
    //   min: 0,
    //   max: 10
    // }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    pool: {
      min: 0,
      max: 10
    }
  },
};