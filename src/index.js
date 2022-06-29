import config from "./config/index.js";
import app from "./app.js";
import logger from "./libs/logger.js";

console.log(`NIVEL DE LOGER >>> ${logger.level}`);
logger.debug("<<<< --   VARIABLES DE ENTORNOS   --  >>>>");
logger.debug(`<<<< IP_SERVER: ${process.env.IP_SERVER} >>>>`);
logger.debug(`<<<< PORT_SERVER: ${process.env.PORT_SERVER} >>>>`);
logger.debug(`<<<< IP_DB: ${process.env.IP_DB} >>>>`);
logger.debug(`<<<< NAME_DB: ${process.env.NAME_DB} >>>>`);
logger.debug(`<<<< PORT_DB: ${process.env.PORT_DB} >>>>`);
logger.debug(`<<<< MONGO_USERNAME: ${process.env.MONGO_USERNAME} >>>>`);
logger.debug(`<<<< MONGO_PASSWORD: ${process.env.MONGO_PASSWORD} >>>>`);
logger.debug(`<<<< NODE_ENV: ${process.env.NODE_ENV} >>>>`);
logger.debug("<<<< --   FIN VARIABLES DE ENTORNOS   --  >>>>");

app.listen(config.PORT_SERVER, () => {
  console.log("################################");
  console.log("###########  API REST ##########");
  console.log("################################");
  console.log(`http://${config.IP_SERVER}:${config.PORT_SERVER}/api/`);
});
