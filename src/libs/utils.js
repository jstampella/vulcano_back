import { createDefault } from "../controllers/user.controller.js";
import logger from "../libs/logger.js";

export function createInitial() {
  logger.warn("Comenzando la creacion basica en bd");
  createDefault();
}
