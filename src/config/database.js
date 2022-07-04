import mongoose from "mongoose";
import config from "./index.js";
import logger from "../libs/logger.js";
import { createInitial } from "../libs/utils.js";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const url = `mongodb://${config.MONGO_USERNAME}:${config.MONGO_PASSWORD}@${config.IP_DB}:${config.PORT_DB}/${config.NAME_DB}`;
//const url = `mongodb://admin:vulcano@vulcano_mongo:27017/vulcano_db?authSource=admin`;
logger.info(url);

export const iniciarDB = async () =>
  mongoose
    .connect(url, options)
    .then(() => {
      logger.warn(`Conexion exitosa MongoDB ${config.IP_DB}:${config.PORT_DB}`);
      createInitial();
    })
    .catch((err) => {
      logger.error(`Error conexion DB ${err}`);
      logger.error(
        `${config.IP_DB}:${config.PORT_DB} user: ${config.MONGO_USERNAME} pass: ${config.MONGO_PASSWORD}`,
      );
    });
