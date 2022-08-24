const { validatename } = require("./category");
const { validateproductdata } = require("./products");
const { CheckDuplicateUser,CheckRoles } = require("./user");
module.exports = { validatename, validateproductdata, CheckDuplicateUser,CheckRoles };
