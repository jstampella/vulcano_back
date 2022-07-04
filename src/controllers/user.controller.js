import logger from "../libs/logger.js";
import User from "../models/user.js";

export const getUser = async (req, res) => {
  User.find()
    .sort({ order: "asc" })
    .exec((err, result) => {
      if (err) {
        res.status(500).json({ code: 500, message: "Error del servidor." });
      } else {
        if (!result) {
          res
            .status(404)
            .json({ code: 404, message: "No se ha encontrado ningun curso." });
        } else {
          res.status(200).json({ code: 200, Users: result });
        }
      }
    });
};

export const createDefault = async () => {
  const adminU = await User.findOne({ name: "admin" });
  if (adminU) {
    logger.warn(`Usuario Admin ya creado.`);
  } else {
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
        logger.warn(`user:admin - pass:admin`);
        logger.warn(`====================================`);
      }
    });
  }
};
