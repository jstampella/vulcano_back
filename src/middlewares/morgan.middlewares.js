import morgan from "morgan";
import { createStream } from "rotating-file-stream";
import path from "path";
const __dirname = path.resolve();
//create a rotating write stream
var accessLogStream = createStream("access.log", {
  interval: "20M", // rotate daily
  path: path.join(__dirname, "logs"),
});

morgan.token("date", function () {
  return new Date().toLocaleDateString("en-SG", {
    timeZone: "America/Argentina/Buenos_Aires",
  });
});

morgan.token("id", function getId(req) {
  return req.id;
});

const morganMiddleware = morgan(
  ":date :res[content-length] :method :status :url :remote-addr - :response-time ms",
  {
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode > 400;
    },
  },
);

export default morganMiddleware;
