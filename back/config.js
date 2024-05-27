require("dotenv").config();
const envVario = require('env-var');
const get = envVario.get;

const NODE_ENV = get("NODE_ENV").default("production").asString();
const envVar = {
  port: get("PORT").default(80).asInt(),
  dbHost: get("DB_HOST").required().asString(),
  dbUser: get("DB_USER").required().asString(),
  dbPassword: get("DB_PASSWORD").asString(),
  dbDatabase: get("DB_DATABASE").required().asString(),
  dbPort: get("DB_PORT").asInt(),
  dbSchema: get("DB_SCHEMA").asString(),
  nodeEnv: NODE_ENV,
};

module.exports = envVar;