import { readFileSync } from "fs";
import path from "path";
const __dirname = path.resolve("./");
const pkg = JSON.parse(readFileSync(path.resolve(__dirname, "package.json")));
import userRoutes from "./user.routes.js";

function Routes(app) {
  app.get("/api", index);
  app.use("/api/user", userRoutes);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.get("/api/error", (req, res) => {
    throw new Error("Error de prueba!! Forzada");
  });
}

const index = (req, res) => {
  res.json({
    name: pkg.name,
    author: pkg.author,
    description: pkg.description,
    version: pkg.version,
  });
};
export default Routes;
