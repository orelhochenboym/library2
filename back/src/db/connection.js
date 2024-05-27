const Sequelize = require("sequelize");
const envVar = require("../../config");

const getConnection = () => {
  const { dbHost, dbDatabase, dbUser, dbPassword } = envVar;
  return new Sequelize(dbDatabase, dbUser, dbPassword, {
    host: dbHost,
    dialect: "postgres",
    ssl: true,
    logging: false,
    dialectOptions: {
      useUTC: true, // for reading time from database
      encrypt: true,
      enableArithAbort: true,
      typeCast: true,
    },
    timezone: "UTC",
  });
};

const connection = getConnection();
module.exports = connection;