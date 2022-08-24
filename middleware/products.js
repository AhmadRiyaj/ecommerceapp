const { Categories } = require("../models");

async function validateproductdata(req, res, next) {
  const data = req.body;
  if (!data.name) {
    res.status(400).send({ message: "Please fill name" });
    return;
  }
  if (data.CategoryId) {
    const result =await Categories.findByPk(data.CategoryId);
    if (result) {
      next();
    } else {
      res.status(400).send({ message: "Category Id Does not exist in Category Table" });

      return;
    }
  } else {
    res.status(400).send({ message: "Fill category Id" });
    return;
  }
}

module.exports = { validateproductdata };
