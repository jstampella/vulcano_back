import express from "express";
import favicon from "serve-favicon";
import path from "path";
import logger from "./libs/logger.js";
import morgan from "morgan";
import morganMiddleware from "./middlewares/morgan.middlewares.js";
import { iniciarDB } from "./config/database.js";

//import Routes
import Routes from "./routes/index.routes.js";

const app = express();
const __dirname = path.resolve("./");

//conexion db
iniciarDB();

//use app
app.use(express.json());

//config Header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
  );
  res.header(
    "Access-Control-Allow-Request-Method",
    "GET,PUT,POST,OPTIONS,DELETE",
  );
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use(
  morgan("dev", {
    skip: () => process.env.NODE_ENV !== "development",
  }),
);
app.use(morganMiddleware);

app.use(favicon(path.resolve(__dirname, "src", "libs", "favicon.ico")));

//cargar rutas personalizadas
Routes(app);

// Capture 500 errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send("Could not perform the calculation!");
  logger.error(
    `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
      req.originalUrl
    } - ${req.method} - ${req.ip}`,
  );
});

// Capture 404 erors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((req, res, next) => {
  res.status(404).send("PAGE NOT FOUND");
  logger.error(
    `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`,
  );
});

export default app;
