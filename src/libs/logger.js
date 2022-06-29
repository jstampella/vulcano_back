import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  console.log("ENV NODE", process.env.NODE_ENV);
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "magenta",
};

// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  new winston.transports.File({
    level: "error",
    filename: "./logs/error.log",
    handleExceptions: true,
    json: true,
    format: format,
    maxsize: 5242880, //5MB
    maxFiles: 5,
    colorize: false,
  }),
  new winston.transports.Console({
    handleExceptions: true,
    json: false,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
      ),
    ),
  }),
];

// Create the logger instance that has to be exported
// and used to log messages.
const logger = winston.createLogger({
  level: level(),
  levels,
  transports,
  exitOnError: false,
});

export default logger;
