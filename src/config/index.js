import { config as confg2 } from "dotenv";
import path from "path";
const __dirname = path.resolve("./");
//Agregar archivo Env desde la ruta del server si existe
confg2({ path: path.resolve(__dirname, ".env") });

const IP_SERVER = process.env.IP_SERVER || "localhost";
const PORT_SERVER = process.env.PORT_SERVER || 3977;
const IP_DB = process.env.IP_DB || "localhost";
const NAME_DB = process.env.NAME_DB || "vulcano_db";
const PORT_DB = process.env.PORT_DB || 27017;
const MONGO_USERNAME = process.env.MONGO_USERNAME || "admin";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "admin";

export default {
  IP_SERVER,
  PORT_SERVER,
  IP_DB,
  NAME_DB,
  PORT_DB,
  MONGO_USERNAME,
  MONGO_PASSWORD,
};
