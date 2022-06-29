import logger from "../libs/logger.js";
import User from "../models/user.js";

export const index = (req, res) => {
  res.status(200).send("index de usuario..");
};

export const createDefault = () => {
  var newUser = new User({
    name: "admin",
    password: "admin",
    role: "admin",
    email: "admin@admin.com",
  });
  newUser.save(function (err) {
    if (err) {
      logger.error(`Error al crar usuario por default`);
    } else {
      logger.warn(`Usuario default creado correctamente`);
    }
  });
};
