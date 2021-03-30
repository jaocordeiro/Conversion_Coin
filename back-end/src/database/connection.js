const knex = require("knex");
const configDb = require("../config/database");

const connection = knex({
  client: "pg",
  connection: {
    host: configDb.HOST,
    user: configDb.USER,
    password: configDb.PASSWORD,
    database: configDb.DATABASE,
  },
  searchPath: ["knex", "public"],
  useNullAsDefault: true,
});

module.exports = connection;
