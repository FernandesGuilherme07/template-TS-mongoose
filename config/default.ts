import "dotenv/config";

const { DB_DATABASE, DB_HOSTNAME, DB_PORT, APP_PORT } = process.env;

export default {
  port: APP_PORT,
  dbUri: `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_DATABASE}`,
};
