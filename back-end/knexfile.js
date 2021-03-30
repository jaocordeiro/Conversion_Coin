const configDb = require("./src/config/database");
const path = require("path");

module.exports = {
  client: "pg",
  connection: {
    host: configDb.HOST,
    user: configDb.USER,
    password: configDb.PASSWORD,
    database: configDb.DATABASE,
  },
  searchPath: ["knex", "public"],
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
  useNullAsDefault: true,
};
