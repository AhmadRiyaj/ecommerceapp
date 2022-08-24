const { Users } = require("../models");

const { Roles } = require("../models");
async function CheckDuplicateUser(req, res, next) {
  if (req.body.username) {
    const username = await Users.findOne({
      where: { username: req.body.username },
    });
    if (username) {
      res.send({ message: "User Name Already Exists" });
      return;
    }
  }

  if (req.body.email) {
    const useremail = await Users.findOne({ where: { email: req.body.email } });
    if (useremail) {
      res.send({ message: "Email Already Exists" });
      return;
    }
  }
  next();
}

async function CheckRoles(req, res, next) {
  if (req.body.roles) {
    const allRoles = await Roles.findAll();
    console.log("All roles: " + allRoles);
  }

  res.send("Roles Founded");
  return;
}

module.exports = {
  CheckDuplicateUser,
  CheckRoles,
};
