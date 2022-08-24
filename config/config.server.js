let serverport = 4500;
require("dotenv").config();

if (process.env.NODE_ENV !== "production") {
  serverport = process.env.PORT;
}

module.exports = { serverport: serverport };
