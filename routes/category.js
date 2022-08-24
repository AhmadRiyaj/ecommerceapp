const express = require("express");
const { validatename } = require("../middleware");

const {
  createCategory,
  getAllCategory,
  getCategorbyId,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");
const routes = express.Router();

routes.post("/ecomm/api/v1/categories", [validatename], createCategory);

routes.get("/ecomm/api/v1/categories", getAllCategory);

routes.get("/ecomm/api/v1/categories/:id", getCategorbyId);

routes.put("/ecomm/api/v1/categories/:id", updateCategory);

routes.delete("/ecomm/api/v1/categories/:id", deleteCategory);

module.exports = {
  CategoryRoute: routes,
};
