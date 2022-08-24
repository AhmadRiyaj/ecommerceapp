const { User } = require("../models");
const bcrypt = require("bcryptjs");
async function signup(req, res) {
  const userdata = req.body;
  try {
    const username = userdata.username;
    const email = userdata.email;
    const password = bcrypt.hashSync(userdata.password, 8);
    const roles = userdata.roles;

    const user = await User.create({ username, email, password });
    console.log(user);
    if (roles) {
      const result = await user.setRoles(roles);
      res.status(200).send(user);
    } else {
      const result = await user.setRoles([1]);
      console.log("Default Role");
      res.status(200).send(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

module.exports = { signup };
