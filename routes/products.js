const express = require("express");

const { validateproductdata } = require("../middleware");

const {
  createnewProducts,
  getAllProducts,
  getProductbyId,
  updateProduct,
  deleteProduct,
  filterbaseProducts,
} = require("../controllers/products");

const routes = express.Router();

routes.post("/ecomm/api/v1/products", [validateproductdata], createnewProducts);
routes.get("/ecomm/api/v1/products/:id", getProductbyId);
routes.get("/ecomm/api/v1/filter", filterbaseProducts);

routes.put("/ecomm/api/v1/products/:id", updateProduct);
routes.delete("/ecomm/api/v1/products/:id", deleteProduct);

routes.get("/ecomm/api/v1/products", getAllProducts);

module.exports = { productsroute: routes };
