const connection = require("./connection");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const Sequelize = require("sequelize");

const db = {
  initialized: false,
};

// fs.readdirSync(__dirname + "/models")
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file.indexOf(".test.js") === -1
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname + "/models", file))(
//       connection,
//       Sequelize.DataTypes,
//     );
//     db[model.name] = model;
//   });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

async function getDB() {
  try {
    if (!db.initialized) {
      await connection.authenticate();
      console.log("DB connection successful!");
      db.initialized = true;
    }
  } catch (error) {
    db.initialized = false;
    console.log("DB connection error!");
    console.log(error.message);
  }

  return db;
}
getDB();
module.exports = getDB;