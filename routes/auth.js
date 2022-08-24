const express = require("express");
const { signup } = require("../controllers/auth");
const { CheckDuplicateUser, CheckRoles } = require("../middleware");
const routes = express.Router();

routes.post(
  "/ecomm/api/v1/auth/signup",
  [CheckDuplicateUser, CheckRoles],
  signup
);

module.exports = {
  authRoute: routes,
};
